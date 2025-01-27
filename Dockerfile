# Stage 1: Build Node.js environment
FROM node:23.6.1 AS build_stage

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install Node.js dependencies
RUN npm install -g npm@11.0.0
RUN npm install --legacy-peer-deps
RUN npm install next@latest --force

# Copy the rest of the application code
COPY . .

# Stage 2: Install Python dependencies
FROM python:3.11-slim AS python_setup_stage

# Set the working directory
WORKDIR /app

# Install system dependencies for Python
RUN apt-get update && apt-get install -y \
    python3.11-venv \
    build-essential \
    libopenblas-dev \
    liblapack-dev \
    gfortran \
    libpq-dev \
    && apt-get clean

# Create and activate the Python virtual environment
RUN python3 -m venv /app/venv

# Copy the Python dependencies file
COPY requirements.txt .

# Install Python dependencies in the virtual environment
RUN /app/venv/bin/pip install --no-cache-dir --upgrade pip
RUN /app/venv/bin/pip install --no-cache-dir -r requirements.txt
RUN /app/venv/bin/pip install --index-url https://phonepe.mycloudrepo.io/public/repositories/phonepe-pg-sdk-python --extra-index-url https://pypi.org/simple phonepe_sdk==1.1.0

# Stage 3: Final runtime environment
FROM node:23.6.1 AS runtime_stage

# Set the working directory
WORKDIR /app

# Install necessary system dependencies
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    python3.11-venv \
    libpython3.11 \
    libopenblas-dev \
    liblapack-dev \
    gfortran \
    libpq-dev \
    && apt-get clean

# Copy the Node.js application and build artifacts
COPY --from=build_stage /app /app

# Copy the Python virtual environment from the Python setup stage
COPY --from=python_setup_stage /app /app

# Ensure the Python virtual environment is activated
RUN echo "source /app/venv/bin/activate" >> ~/.bashrc

# Ensure the Python virtual environment is used by default
ENV PATH="/app/venv/bin:$PATH"

# Expose the port for Next.js (default: 3000)
EXPOSE 3000

# Command to run the Next.js app
CMD ["npm", "run", "dev"]
