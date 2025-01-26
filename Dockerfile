# Stage 1: Build Node.js environment
FROM node:23.6.1 AS build_stage

# Set the working directory
WORKDIR /app

# Copy package.json and install Node.js dependencies
COPY package.json package-lock.json ./
RUN npm install -g npm@11.0.0
RUN npm install --legacy-peer-deps
RUN npm install next@latest --force

# Copy the rest of the application code
COPY . .

# Stage 2: Install Python dependencies
FROM python:3.11-slim AS python_setup_stage

# Set the working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libopenblas-dev \
    liblapack-dev \
    gfortran \
    libpq-dev \
    && apt-get clean

# Create a virtual environment for Python
RUN python3 -m venv /app/venv

# Install Python dependencies inside the virtual environment
COPY requirements.txt .
RUN /app/venv/bin/pip install --no-cache-dir -r requirements.txt
RUN /app/venv/bin/pip install --index-url https://phonepe.mycloudrepo.io/public/repositories/phonepe-pg-sdk-python --extra-index-url https://pypi.org/simple phonepe_sdk==1.1.0

# Stage 3: Final runtime environment
FROM node:23.6.1 AS runtime_stage

# Set the working directory
WORKDIR /app

# Install necessary system dependencies (including Python 3)
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    libpython3.11 \
    libopenblas-dev \
    liblapack-dev \
    gfortran \
    libpq-dev \
    && apt-get clean

# Copy the Node.js application and build artifacts
COPY --from=build_stage /app /app

# Copy the Python virtual environment from the previous stage
COPY --from=python_setup_stage /app /app

# Make sure to use the Python virtual environment
ENV PATH="/app/venv/bin:$PATH"

# Expose the port for Next.js (default: 3000)
EXPOSE 3000

# Command to run the Next.js app
CMD ["npm", "run", "dev"]
