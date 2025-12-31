# Unified Technical Dossier
## Scientific Analytics Alliance (SAA) - NVIDIA Inception Application

**Document Version:** 1.0  
**Last Updated:** December 2025  
**Purpose:** Comprehensive technical documentation for NVIDIA Inception application  
**Platforms Covered:** 5 production-ready platforms

---

## Executive Summary

Scientific Analytics Alliance (SAA) integrates **5 production-ready financial analytics platforms** into a unified Docker bundle, optimized for GPU acceleration via NVIDIA API. This document provides comprehensive technical documentation across all platforms, demonstrating architecture, technology stack, and integration capabilities.

### Platform Overview

| Platform | Purpose | Technology Stack | Status |
|----------|---------|-----------------|--------|
| **ARIN Platform** | Multi-agent risk intelligence | FastAPI, PostgreSQL, Neo4j, NVIDIA API | ✅ Production |
| **SAA Risk Analyzer** | Portfolio risk management | Go, Gin, PostgreSQL, Gonum | ✅ Production |
| **Crypto Reports** | Digital asset intelligence | Go, Gin, NVIDIA API, CoinGecko | ✅ Production |
| **Investment Bot** | Stock analysis platform | Python, Flask, FastAPI, NVIDIA API | ✅ Production |
| **Signal Analysis** | News analytics AI | Python, FastAPI, SQLite, NVIDIA API | ✅ Production |

---

## Table of Contents

1. [Platform 1: SAA Risk Analyzer](#platform-1-saa-risk-analyzer)
2. [Platform 2: Crypto Reports](#platform-2-crypto-reports)
3. [Platform 3: Investment Bot](#platform-3-investment-bot)
4. [Platform 4: Signal Analysis](#platform-4-signal-analysis)
5. [Platform 5: ARIN Platform](#platform-5-arin-platform)

---

# Platform 1: SAA Risk Analyzer

**Document Version**: 1.0.0  
**Last Updated**: December 2025  
**Classification**: Technical Documentation  
**Maintained by**: ReserveOne Engineering Team

---

## Executive Summary

**SAA Risk Analyzer** is a production-ready, institutional-grade portfolio risk management platform designed to deliver comprehensive risk analytics, stress testing, and portfolio optimization capabilities. The system is architected for high performance, scalability, and security, comparable to industry-leading platforms such as Bloomberg Terminal and BlackRock Aladdin.

### Key Technical Highlights

- **Performance**: Handles 2000-5000 requests/second with sub-200ms average response times
- **Scalability**: Supports 500-1000+ concurrent users on production hardware
- **Computational Power**: Executes 100K Monte Carlo simulations in 4-7 seconds
- **Architecture**: Modern microservices-ready design with clean separation of concerns
- **Security**: Enterprise-grade authentication, authorization, and data protection
- **Infrastructure**: Deployed on Contabo Cloud VPS with 18 CPU cores and 96 GB RAM

---

## Table of Contents

1. [System Overview](#system-overview)
2. [Technical Architecture](#technical-architecture)
3. [Technology Stack](#technology-stack)
4. [Infrastructure & Deployment](#infrastructure--deployment)
5. [Security Architecture](#security-architecture)
6. [Performance & Scalability](#performance--scalability)
7. [Data Management](#data-management)
8. [API Architecture](#api-architecture)
9. [Integration Capabilities](#integration-capabilities)
10. [Monitoring & Observability](#monitoring--observability)
11. [Development & DevOps](#development--devops)
12. [Risk & Compliance](#risk--compliance)
13. [Future Roadmap](#future-roadmap)

---

## System Overview

### Purpose & Scope

SAA Risk Analyzer is a comprehensive risk management platform that provides:

- **Portfolio Risk Analysis**: VaR, CVaR, correlation analysis, and risk decomposition
- **Advanced Analytics**: Monte Carlo simulations, efficient frontier optimization, factor risk analysis
- **Stress Testing**: Historical scenario analysis and custom shock testing
- **Performance Metrics**: Returns, Sharpe ratio, drawdown analysis, benchmark comparison
- **Market Data Integration**: Real-time and historical data from multiple sources
- **Specialized Analysis**: Elliott Wave, Wyckoff, and Smart Money analysis

### System Requirements

#### Minimum Requirements
- **CPU**: 4 cores
- **RAM**: 8 GB
- **Storage**: 100 GB SSD
- **Database**: PostgreSQL 15+

#### Recommended Production (Current)
- **CPU**: 18 cores
- **RAM**: 96 GB
- **Storage**: 700 GB SSD
- **Database**: PostgreSQL 15 with optimized configuration
- **Network**: High-bandwidth connection

### Deployment Model

- **Deployment Type**: Monolithic application with microservices-ready architecture
- **Containerization**: Docker & Docker Compose support
- **Orchestration**: Optional Kubernetes support (future)
- **Cloud Provider**: Contabo Cloud VPS
- **Location**: 173.212.208.123

---

## Technical Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                          Client Layer                            │
│                    (Web Browser / Mobile App)                    │
└────────────────────────────┬────────────────────────────────────┘
                             │ HTTPS/WSS
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                     Presentation Layer                           │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Frontend (React 18 + TypeScript + Vite)                 │  │
│  │  - Single Page Application (SPA)                         │  │
│  │  - Client-side routing                                   │  │
│  │  - State management (Zustand)                            │  │
│  │  - Real-time updates (SSE/WebSocket)                     │  │
│  └──────────────────────────────────────────────────────────┘  │
└────────────────────────────┬────────────────────────────────────┘
                             │ REST API / SSE
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Application Layer                           │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Backend API (Go + Gin Framework)                        │  │
│  │  - RESTful API endpoints                                 │  │
│  │  - Authentication & Authorization (JWT + RBAC)           │  │
│  │  - Request validation & rate limiting                    │  │
│  │  - Error handling & logging                              │  │
│  └──────────────────────────────────────────────────────────┘  │
└────────────────────────────┬────────────────────────────────────┘
                             │
        ┌────────────────────┼────────────────────┐
        ▼                    ▼                    ▼
┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│  Business    │   │  Calculation │   │  External    │
│  Logic       │   │  Engine      │   │  Services    │
│  Services    │   │  (Math)      │   │  (APIs)      │
└──────────────┘   └──────────────┘   └──────────────┘
        │                    │                    │
        └────────────────────┼────────────────────┘
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                       Data Layer                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  PostgreSQL 15 Database                                  │  │
│  │  - Portfolio & Position data                             │  │
│  │  - Historical price data                                 │  │
│  │  - Risk metrics history                                  │  │
│  │  - User authentication data                              │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### Component Architecture

#### Backend Services

**Core Services:**
- **Portfolio Service**: Portfolio and position management
- **Risk Service**: Risk metric calculations (VaR, CVaR, correlation)
- **Analytics Service**: Performance metrics, drawdown analysis
- **Optimization Service**: Portfolio optimization and efficient frontier
- **Market Data Service**: Multi-source market data aggregation

**Supporting Services:**
- **Authentication Service**: JWT token management, RBAC
- **Data Sync Service**: Market data synchronization
- **Job Queue Service**: Asynchronous task processing
- **GPU Service** (optional): NVIDIA GPU-accelerated computations (see [NVIDIA GPU Integration](#nvidia-gpu-integration))

#### Frontend Components

**Pages:**
- Dashboard (overview metrics)
- Analytics (detailed risk analytics)
- Portfolio Management (create/edit portfolios)
- Import (CSV data import)

**Shared Components:**
- Charts (risk metrics visualization)
- Tables (portfolio positions, metrics)
- Forms (portfolio/position management)
- Modals (detailed views)

### Data Flow

1. **User Request** → Frontend (React SPA)
2. **API Call** → Backend API (Go/Gin)
3. **Authentication** → JWT validation middleware
4. **Business Logic** → Service layer
5. **Calculation** → Math engine (Gonum)
6. **Data Access** → GORM → PostgreSQL
7. **Response** → JSON → Frontend
8. **Rendering** → React components → User interface

### Design Patterns

- **Layered Architecture**: Separation of concerns (handlers → services → repositories)
- **Dependency Injection**: Services injected into handlers
- **Repository Pattern**: Data access abstraction (partial implementation)
- **Service Layer**: Business logic encapsulation
- **Middleware Pattern**: Cross-cutting concerns (auth, logging, validation)
- **Strategy Pattern**: Multiple VaR calculation methods

---

## Technology Stack

### Backend Technology

#### Core Framework
| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| **Language** | Go | 1.22+ | High-performance backend language |
| **Web Framework** | Gin | 1.10.0 | HTTP web framework |
| **ORM** | GORM | 1.25.7 | Database ORM |
| **Database Driver** | PostgreSQL Driver | 1.5.7 | PostgreSQL connectivity |

#### Mathematical Computing
| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| **Math Library** | Gonum | 0.15.0 | Numerical computing (matrices, stats) |
| **Linear Algebra** | Gonum/blas | - | BLAS operations |
| **Statistics** | Gonum/stat | - | Statistical functions |

#### Security & Authentication
| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| **JWT** | golang-jwt/jwt | 5.2.0 | Token-based authentication |
| **Password Hashing** | Argon2id (crypto) | - | Secure password storage |
| **RBAC** | Custom | - | Role-based access control |

#### Configuration & Logging
| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| **Configuration** | Viper | 1.18.2 | Configuration management |
| **Logging** | Zap | 1.27.0 | Structured logging |
| **UUID** | Google UUID | 1.6.0 | UUID generation |

### Frontend Technology

#### Core Framework
| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| **Framework** | React | 18.2.0 | UI library |
| **Language** | TypeScript | 5.2.2 | Type-safe JavaScript |
| **Build Tool** | Vite | 5.1.0 | Fast build tool |
| **Bundler** | Vite/Rollup | - | Module bundling |

#### State Management & Routing
| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| **State Management** | Zustand | 4.5.0 | Global state management |
| **Routing** | React Router | 6.22.0 | Client-side routing |
| **HTTP Client** | Axios | 1.6.7 | API communication |

#### UI & Styling
| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| **Styling** | TailwindCSS | 3.4.1 | Utility-first CSS |
| **Animations** | Framer Motion | 11.0.3 | Animation library |
| **Icons** | Lucide React | - | Icon library |

#### Data Visualization
| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| **Charts** | Recharts | 2.12.0 | Chart library |
| **Visualization** | Custom | - | Risk-specific visualizations |

### Infrastructure Technology

#### Database
- **PostgreSQL 15**: Primary database
- **Connection Pooling**: GORM default pooling
- **Backup Strategy**: Automated daily backups (configurable)

#### Reverse Proxy & Web Server
- **Caddy 2**: Automatic HTTPS, reverse proxy (optional)
- **Nginx**: Production web server (alternative)

#### Containerization
- **Docker**: Container runtime
- **Docker Compose**: Multi-container orchestration

#### Process Management
- **systemd**: Service management (production)
- **PM2**: Alternative process manager (optional)

---

## Infrastructure & Deployment

### Production Server Configuration

**Provider**: Contabo  
**Server IP**: 173.212.208.123  
**Server Type**: Cloud VPS 60 SSD

#### Hardware Specifications
- **CPU**: 18 cores
- **RAM**: 96 GB
- **Storage**: 700 GB SSD
- **Network**: High-bandwidth connection

#### Resource Allocation

| Component | CPU Cores | RAM | Storage | Notes |
|-----------|-----------|-----|---------|-------|
| **Backend API** | 2-4 cores | 2-4 GB | N/A | Scales with load |
| **PostgreSQL** | 2-4 cores | 24 GB | 100+ GB | 25% RAM for shared_buffers |
| **Frontend** | 0.5 core | 512 MB | 50 MB | Static files |
| **System** | 1-2 cores | 4-8 GB | 50 GB | OS + cache |
| **Available** | 8-12 cores | 60+ GB | 550+ GB | Reserve for scaling |

### Network Architecture

#### Port Configuration

| Service | Internal Port | External Port | Protocol | Access |
|---------|---------------|---------------|----------|--------|
| **Frontend (HTTP)** | 3000 | 80/443 | HTTP/HTTPS | Public |
| **Backend API** | 8084 | 8084 (internal) | HTTP | Internal only |
| **PostgreSQL** | 5432 | N/A | TCP | Localhost only |
| **GPU Service** | 8085 | N/A | HTTP | Internal (optional) |

#### Network Security

- **Firewall**: UFW/iptables configured
- **Database**: Not exposed externally
- **Backend API**: Accessible only via reverse proxy
- **SSL/TLS**: Let's Encrypt certificates (automatic)

### Deployment Methods

#### Method 1: Docker Compose (Recommended)

```yaml
services:
  - PostgreSQL database
  - Backend API
  - Frontend (Nginx)
  - Caddy (reverse proxy, optional)
```

**Advantages:**
- Easy deployment and updates
- Consistent environment
- Resource limits configured
- Health checks enabled

#### Method 2: Native Services (systemd)

```bash
# Services managed via systemd
- saa-backend.service
- saa-frontend.service
- PostgreSQL (system service)
```

**Advantages:**
- Direct control
- Lower overhead
- Better integration with OS

### Deployment Process

1. **Code Deployment**
   - Git-based deployment
   - CI/CD pipeline (future)
   - Zero-downtime deployment (blue-green, optional)

2. **Database Migration**
   - GORM auto-migration (development)
   - Manual migration scripts (production)
   - Backup before migration

3. **Configuration Management**
   - Environment variables (.env files)
   - Secrets management (environment-based)
   - Configuration validation on startup

4. **Health Checks**
   - `/health` endpoint (API)
   - Database connectivity checks
   - Service dependency checks

### Scaling Strategy

#### Vertical Scaling (Current)
- **Current Capacity**: 18 CPU cores, 96 GB RAM
- **Utilization**: ~30-50% under normal load
- **Headroom**: 50-70% capacity available
- **Scaling**: Upgrade server plan (Contabo)

#### Horizontal Scaling (Future)
- **Load Balancing**: Nginx/HAProxy
- **Multiple Instances**: Backend API replicas
- **Database Replicas**: Read replicas for scaling reads
- **Session Management**: Stateless JWT tokens (ready)

---

## Security Architecture

### Authentication & Authorization

#### Authentication Method
- **Primary**: JWT (JSON Web Tokens)
- **Token Type**: HMAC-SHA256 signed tokens
- **Token Storage**: localStorage (frontend)
- **Token Expiry**: 15 minutes (access), 30 days (refresh)

#### Authorization Model
- **Type**: Role-Based Access Control (RBAC)
- **Roles**:
  - `admin`: Full access + user management
  - `analyst`: Read + calculate risks
  - `viewer`: Read-only access
- **Implementation**: Middleware-based route protection

### Password Security

#### Password Hashing
- **Algorithm**: Argon2id
- **Parameters**:
  - Time cost: 1
  - Memory: 64 MB
  - Parallelism: 4
  - Salt: 16 bytes random
- **Compliance**: OWASP recommendations

#### Password Policies
- Minimum length: 8 characters (configurable)
- Complexity requirements (optional)
- Password reset functionality

### Data Protection

#### Encryption
- **In Transit**: TLS 1.2+ (HTTPS)
- **At Rest**: Database encryption (PostgreSQL)
- **Sensitive Data**: Environment variables for secrets

#### Data Isolation
- **Multi-tenant**: User-based data isolation
- **Database**: Row-level security (via application logic)
- **Backups**: Encrypted backups (optional)

### API Security

#### Input Validation
- Request validation middleware
- Type checking and sanitization
- SQL injection prevention (GORM parameterized queries)

#### Rate Limiting
- **Method**: Token bucket algorithm
- **Limits**: 60 requests/minute per IP
- **Implementation**: Middleware-based
- **Configurable**: Per-endpoint limits (future)

#### CORS Configuration
- **Development**: `*` (all origins)
- **Production**: Specific domains only
- **Headers**: Configurable allowed headers

### Security Headers

- **X-Content-Type-Options**: nosniff
- **X-Frame-Options**: DENY
- **X-XSS-Protection**: 1; mode=block
- **Strict-Transport-Security**: HSTS (production)
- **Content-Security-Policy**: Configurable

### Vulnerability Management

- **Dependency Scanning**: `go list -m all` (Go)
- **Security Updates**: Regular dependency updates
- **Patch Management**: Automated security patches (system)
- **Penetration Testing**: Periodic security audits (recommended)

---

## Performance & Scalability

### Performance Benchmarks

Refer to [BENCHMARKS.md](./BENCHMARKS.md) for detailed performance metrics.

#### Key Performance Indicators

| Metric | Value | Status |
|--------|-------|--------|
| **API P95 Response** | 200ms-3s | ✅ Good |
| **Throughput** | 2000-5000 req/sec | ✅ Excellent |
| **Monte Carlo (10K)** | 0.8-2s | ✅ Excellent |
| **Concurrent Users** | 500-1000+ | ✅ Excellent |
| **Database Query P95** | < 300ms | ✅ Good |

### Scalability Characteristics

#### Current Capacity (18 cores, 96 GB RAM)

- **Concurrent Requests**: 500-1000+
- **Database Connections**: 100 (pool size)
- **Memory Cache**: 80+ GB available
- **CPU Utilization**: 30-50% (normal load)

#### Scalability Limits

- **Single Instance**: ~1000 concurrent users
- **Database**: ~10,000 portfolios, millions of price records
- **Monte Carlo**: Up to 1M simulations (96 GB RAM)
- **Portfolio Size**: 100+ assets efficiently

### Performance Optimization

#### Implemented Optimizations

- **Parallel Processing**: Goroutines for Monte Carlo (18 cores)
- **Database Indexing**: Foreign keys, date columns, symbols
- **Connection Pooling**: GORM connection pool
- **Batch Operations**: Bulk inserts for positions
- **Code Splitting**: Vite automatic chunking (frontend)
- **Lazy Loading**: React.lazy for routes

#### Future Optimizations

- **Redis Caching**: Cache frequent queries
- **Response Compression**: Gzip compression
- **CDN**: Static asset delivery
- **Enhanced GPU Acceleration**: NVIDIA RAPIDS cuDF/cuML integration (planned)

### Monitoring Performance

- **Application Metrics**: Custom metrics endpoints (future)
- **Database Monitoring**: PostgreSQL statistics
- **System Metrics**: CPU, memory, disk I/O
- **Error Tracking**: Application logs (Zap)

---

## Data Management

### Database Architecture

#### Database: PostgreSQL 15

**Connection Configuration:**
- **Host**: localhost (production)
- **Port**: 5432
- **Database**: risk_db
- **Connection Pool**: 100 connections (max)
- **Shared Buffers**: 24 GB (25% of RAM)

### Data Models

#### Core Entities

**User**
- ID (UUID), Email, Password Hash, Role
- Created/Updated timestamps

**Portfolio**
- ID (UUID), Name, Description
- User association
- Positions (one-to-many)

**Position**
- ID (UUID), Portfolio ID, Asset ID
- Quantity, Average Price, Purchase Date
- Asset (many-to-one)

**Asset**
- ID (UUID), Symbol, Name, Class
- Currency, Metadata

**Price**
- ID (UUID), Asset ID, Date
- Close Price (OHLC support ready)
- Indexed on (asset_id, date)

#### Data Relationships

```
User (1) ──┐
           ├── (N) Portfolio (1) ── (N) Position (N) ── (1) Asset
                                              │
                                              └── (N) Price
```

### Data Storage

#### Storage Requirements

| Data Type | Size per Record | Typical Volume | Storage |
|-----------|----------------|----------------|---------|
| **Portfolios** | ~1 KB | 1,000 | 1 MB |
| **Positions** | ~200 bytes | 10,000 | 2 MB |
| **Assets** | ~500 bytes | 10,000 | 5 MB |
| **Prices** | ~100 bytes | 10,000,000 | 1 GB |
| **Risk Metrics** | ~1 KB | 100,000 | 100 MB |
| **Total (Estimated)** | - | - | ~2-5 GB |

#### Data Retention

- **Price Data**: Indefinite (historical analysis)
- **Risk Metrics**: 1-5 years (configurable)
- **Audit Logs**: 90 days (configurable)
- **User Sessions**: 30 days (JWT expiry)

### Backup & Recovery

#### Backup Strategy

- **Frequency**: Daily automated backups
- **Method**: PostgreSQL `pg_dump`
- **Storage**: External storage (cloud/local)
- **Retention**: 30 days (configurable)
- **Encryption**: Optional (recommended)

#### Recovery Procedures

- **Point-in-Time Recovery**: PostgreSQL WAL (optional)
- **Restore Time**: < 1 hour (typical)
- **Testing**: Quarterly restore tests (recommended)

### Data Migration

- **Method**: GORM auto-migration (development)
- **Production**: Manual migration scripts
- **Version Control**: Migration files in version control
- **Rollback**: Supported via migration scripts

---

## API Architecture

### API Design Principles

- **RESTful**: REST principles followed
- **Stateless**: JWT-based authentication
- **Versioning**: URL-based versioning (`/api/v1/`)
- **Documentation**: OpenAPI/Swagger (future)

### API Endpoints Overview

#### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/refresh` - Refresh JWT token
- `GET /api/auth/me` - Current user info

#### Portfolio Management
- `GET /api/portfolios` - List portfolios
- `POST /api/portfolios` - Create portfolio
- `GET /api/portfolios/:id` - Get portfolio
- `PUT /api/portfolios/:id` - Update portfolio
- `DELETE /api/portfolios/:id` - Delete portfolio
- `POST /api/portfolios/:id/positions` - Add positions

#### Risk Calculations
- `POST /api/risk/var` - Calculate VaR
- `POST /api/risk/cvar` - Calculate CVaR
- `POST /api/risk/correlation` - Correlation matrix
- `GET /api/risk/dashboard` - Dashboard metrics

#### Analytics
- `GET /api/portfolios/:id/forward-metrics` - Forward metrics
- `GET /api/portfolios/:id/performance` - Performance metrics
- `GET /api/portfolios/:id/benchmark-comparison` - Benchmark comparison
- `GET /api/portfolios/:id/drawdown` - Drawdown analysis
- `POST /api/portfolios/:id/monte-carlo` - Monte Carlo simulation

#### Optimization
- `POST /api/portfolios/:id/optimize` - Portfolio optimization
- `POST /api/portfolios/:id/efficient-frontier` - Efficient frontier

### API Response Format

#### Success Response
```json
{
  "data": { ... },
  "meta": {
    "timestamp": "2025-12-01T12:00:00Z"
  }
}
```

#### Error Response
```json
{
  "error": {
    "code": "ERR_CODE",
    "message": "Error message",
    "details": { ... }
  },
  "meta": {
    "timestamp": "2025-12-01T12:00:00Z"
  }
}
```

### API Rate Limiting

- **Default**: 60 requests/minute per IP
- **Authentication Endpoints**: Stricter limits
- **Heavy Endpoints**: Lower limits (optimization, insights)
- **Implementation**: Middleware-based

---

## Integration Capabilities

### NVIDIA GPU Integration

See detailed NVIDIA GPU integration documentation in the [NVIDIA GPU Integration](#nvidia-gpu-integration) section below.

### NVIDIA GPU Integration

For detailed NVIDIA GPU integration documentation, see the [NVIDIA GPU Integration](#nvidia-gpu-integration) section below.

### External Data Sources

#### Market Data APIs

**Crypto Data:**
- **Binance API**: Real-time crypto prices (no rate limits)
- **CoinGecko API**: Comprehensive crypto data (free tier)
- **CoinCap API**: Alternative source (200 requests/day)

**Stock Data:**
- **Yahoo Finance**: Stock prices via yfinance library
- **Investment Dashboard API**: Internal data source

**Economic Data:**
- **FRED API**: Federal Reserve Economic Data
- **ARIN Integration**: Asset Registry Integration Network

#### Integration Architecture

- **Fallback Chain**: Automatic failover between data sources
- **Retry Logic**: Exponential backoff for failed requests
- **Caching**: Database caching for historical data
- **Rate Limiting**: Respect API rate limits

### NVIDIA GPU Integration

#### GPU Service Overview

The system includes an optional **GPU-accelerated computation service** that provides significant performance improvements for computationally intensive operations such as portfolio optimization, Monte Carlo simulations, and covariance matrix calculations.

**Service Architecture:**
```
Go Backend API ← HTTP REST → GPU Service (Python) ← CUDA → NVIDIA GPU
```

#### GPU Service Technology Stack

| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| **Framework** | FastAPI | Latest | REST API framework |
| **GPU Computing** | CuPy | 12.3.0+ | GPU-accelerated NumPy operations |
| **Optimization** | JAX | Latest | GPU-accelerated optimization |
| **Monte Carlo** | JAX | Latest | GPU-accelerated simulations |
| **Covariance** | CuPy/RAPIDS cuDF | Latest | GPU-accelerated matrix operations |
| **Runtime** | CUDA | 11.8+ / 12.x | NVIDIA CUDA toolkit |

#### GPU Service Requirements

**Hardware:**
- **NVIDIA GPU** with CUDA Compute Capability >= 7.0
- **VRAM**: 8 GB+ recommended (4 GB minimum)
- **CUDA Toolkit**: 11.8 or 12.x

**Software:**
- **Python**: 3.9+
- **CUDA Drivers**: Latest NVIDIA drivers
- **Dependencies**: See `gpu_service/requirements.txt`

#### GPU Service API Endpoints

**Health Check:**
```
GET /health
Response: {
    "status": "healthy",
    "gpu_available": true/false,
    "services": {
        "optimizer": true/false,
        "covariance": {...},
        "monte_carlo": true/false
    }
}
```

**Portfolio Optimization:**
```
POST /optimize
Body: {
    "expectedReturns": [0.10, 0.15, 0.12],
    "covarianceMatrix": [[0.04, 0.02, ...], ...],
    "riskFreeRate": 0.02,
    "objective": "maxSharpe",  // "maxSharpe", "minVariance", "maxReturn"
    "maxWeightPerAsset": 0.5,
    "minWeightPerAsset": 0.0,
    "targetVolatility": null,
    "targetReturn": null
}
```

**Covariance Calculation:**
```
POST /covariance
Body: {
    "returns": [[0.01, -0.02, ...], ...],  // Time series returns
    "annualize": true
}
```

**Monte Carlo Simulation:**
```
POST /monte-carlo
Body: {
    "initialValue": 100000,
    "expectedReturn": 0.10,
    "volatility": 0.20,
    "horizonDays": 90,
    "simulations": 10000
}
```

#### Performance Improvements with GPU

| Operation | CPU Time | GPU Time | Speedup |
|-----------|----------|----------|---------|
| **Portfolio Optimization** | 15-45s | 1-5s | **3-10x** |
| **Covariance Matrix (50 assets)** | 200-500ms | 2-20ms | **10-50x** |
| **Monte Carlo (10K sim)** | 1-2s | 0.1-0.5s | **2-10x** |
| **Monte Carlo (100K sim)** | 6-12s | 0.5-2s | **5-20x** |
| **Monte Carlo (1M sim)** | 50-100s | 5-15s | **5-10x** |

#### GPU Service Deployment

**Configuration:**
- **Default Port**: 8085
- **Service URL**: `http://localhost:8085` (configurable)
- **Health Check**: Automatic availability detection
- **Fallback**: Automatic CPU fallback if GPU unavailable

**Integration with Go Backend:**
- **Client**: `backend/internal/service/gpu_client.go`
- **Service**: `backend/internal/service/optimization.go`
- **Detection**: Automatic GPU service availability check on startup
- **Fallback Logic**: Seamless CPU fallback if GPU service unavailable

**Deployment Options:**

1. **Standalone Service** (Current):
   ```bash
   cd gpu_service
   python main.py
   ```

2. **Docker Deployment**:
   ```yaml
   gpu-service:
     build: ./gpu_service
     runtime: nvidia
     environment:
       - NVIDIA_VISIBLE_DEVICES=all
     ports:
       - "8085:8085"
   ```

3. **Systemd Service** (Production):
   ```bash
   systemctl enable gpu-service
   systemctl start gpu-service
   ```

#### GPU Service Features

**Supported Operations:**
- ✅ Portfolio optimization (Max Sharpe, Min Variance, Max Return)
- ✅ Covariance matrix calculation
- ✅ Correlation matrix calculation
- ✅ Monte Carlo simulations
- ✅ Automatic CPU fallback

**Optimization Objectives:**
- `maxSharpe`: Maximize Sharpe ratio
- `minVariance`: Minimize portfolio variance
- `maxReturn`: Maximize expected return

**Constraints Support:**
- Maximum weight per asset
- Minimum weight per asset
- Target volatility (optional)
- Target return (optional)

#### NVIDIA Technologies Integration

**Current Implementation:**
- **CuPy**: GPU-accelerated NumPy operations
- **JAX**: GPU-accelerated optimization and Monte Carlo
- **FastAPI**: High-performance REST API

**Future NVIDIA Technologies (Planned):**

1. **NVIDIA RAPIDS cuDF**:
   - GPU-accelerated DataFrame operations
   - 10-50x faster data processing
   - pandas-compatible API

2. **NVIDIA RAPIDS cuML**:
   - GPU-accelerated machine learning
   - PCA, clustering, regression on GPU
   - 10-100x faster ML algorithms

3. **NVIDIA cuOpt**:
   - GPU-accelerated portfolio optimization
   - Real-time optimization for large portfolios (1000+ assets)
   - 10-100x faster optimization

4. **NVIDIA Triton Inference Server**:
   - Model serving and inference
   - Multi-model deployment
   - Dynamic batching

#### GPU Service Status

**Current Status**: ✅ **Implemented and Operational**

- **Service**: Fully functional GPU service
- **Integration**: Integrated with Go backend
- **Availability**: Optional (CPU fallback available)
- **Performance**: Significant speedup for supported operations

**Usage:**
- **Automatic**: Backend automatically uses GPU if available
- **Manual Override**: Can be disabled via configuration
- **Monitoring**: Health check endpoint for service status

#### GPU Service Code Structure

**Backend Integration:**
```
backend/internal/service/
├── gpu_client.go          # HTTP client for GPU service
└── optimization.go        # Integration with optimization service
```

**GPU Service:**
```
gpu_service/
├── main.py                # FastAPI REST API server
├── optimization.py        # GPU-accelerated portfolio optimization
├── covariance.py          # GPU-accelerated covariance calculations
├── monte_carlo.py         # GPU-accelerated Monte Carlo simulations
├── requirements.txt       # Dependencies (GPU-enabled)
└── requirements_cpu.txt   # Dependencies (CPU fallback)
```

#### GPU Service Configuration

**Environment Variables:**
- `GPU_SERVICE_URL`: GPU service base URL (default: `http://localhost:8085`)
- `GPU_SERVICE_ENABLED`: Enable/disable GPU service (default: `true`)
- `GPU_SERVICE_TIMEOUT`: Request timeout in seconds (default: `30`)

**Backend Configuration:**
- Automatic detection on startup
- Health check via `/health` endpoint
- Graceful fallback to CPU if GPU unavailable
- No configuration required for basic usage

### Optional Services

#### AI Service
- **Purpose**: AI-powered insights and recommendations
- **Integration**: HTTP API
- **Technology**: NVIDIA NIM (planned)
- **Status**: Optional (future)

#### Additional GPU Services
- **RAPIDS Integration**: Planned for data processing acceleration
- **Triton Inference**: Planned for ML model serving

---

## Monitoring & Observability

### Logging

#### Logging Framework: Zap (Structured Logging)

**Log Levels:**
- `DEBUG`: Detailed debugging information
- `INFO`: General informational messages
- `WARN`: Warning messages
- `ERROR`: Error messages
- `FATAL`: Critical errors (application exit)

**Log Format:**
- **Development**: Console output (human-readable)
- **Production**: JSON format (machine-readable)

**Log Storage:**
- **Application Logs**: `/var/log/saa-risk-analyzer/`
- **Rotation**: Daily rotation (logrotate)
- **Retention**: 90 days (configurable)

### Health Monitoring

#### Health Check Endpoint
- **Endpoint**: `GET /health`
- **Response Time**: < 5ms
- **Checks**: Database connectivity, service status
- **Monitoring**: External monitoring tools (Prometheus, Grafana - optional)

### Metrics Collection (Future)

#### Planned Metrics
- **Application Metrics**: Request rate, response times, error rates
- **Business Metrics**: Portfolio calculations, user activity
- **System Metrics**: CPU, memory, disk I/O
- **Database Metrics**: Query performance, connection pool

#### Tools
- **Prometheus**: Metrics collection
- **Grafana**: Visualization and dashboards
- **Alerting**: Alertmanager integration

### Error Tracking

- **Application Errors**: Logged via Zap
- **Error Aggregation**: Future integration (Sentry, etc.)
- **Alerting**: Critical errors trigger alerts (future)

---

## Development & DevOps

### Development Workflow

#### Version Control
- **Repository**: Git
- **Branching Strategy**: Git Flow (main, develop, feature branches)
- **Code Review**: Pull request process

#### Development Environment

**Backend:**
```bash
go 1.22+
PostgreSQL 15+
Air (hot reload, optional)
```

**Frontend:**
```bash
Node.js 18+
npm/yarn
Vite dev server
```

### Testing Strategy

#### Backend Testing
- **Unit Tests**: Go `testing` package
- **Integration Tests**: Database integration tests
- **Test Coverage**: Target 70%+ (current: partial)

#### Frontend Testing
- **Unit Tests**: Jest/Vitest (future)
- **Component Tests**: React Testing Library (future)
- **E2E Tests**: Playwright/Cypress (future)

### CI/CD Pipeline (Future)

#### Planned Pipeline
1. **Code Commit** → Git push
2. **Automated Tests** → Run test suite
3. **Build** → Compile backend, build frontend
4. **Security Scan** → Dependency vulnerability scan
5. **Deploy** → Deploy to staging/production

#### Tools (Planned)
- **CI/CD**: GitHub Actions / GitLab CI
- **Container Registry**: Docker Hub / Private registry
- **Deployment**: Automated deployment scripts

### Code Quality

#### Linting
- **Backend**: golangci-lint
- **Frontend**: ESLint + Prettier

#### Formatting
- **Backend**: `go fmt`
- **Frontend**: Prettier

#### Documentation
- **Code Comments**: GoDoc standard
- **API Documentation**: OpenAPI/Swagger (future)
- **Architecture Documentation**: This document

---

## Risk & Compliance

### Technical Risks

#### Identified Risks

1. **Performance Degradation**
   - **Risk**: High load causing slow responses
   - **Mitigation**: Scalability measures, caching, optimization
   - **Monitoring**: Response time monitoring

2. **Data Loss**
   - **Risk**: Database corruption or accidental deletion
   - **Mitigation**: Automated backups, point-in-time recovery
   - **Testing**: Regular restore tests

3. **Security Vulnerabilities**
   - **Risk**: Exploitation of security flaws
   - **Mitigation**: Regular updates, security audits, penetration testing
   - **Monitoring**: Security scanning, vulnerability alerts

4. **Service Downtime**
   - **Risk**: Unplanned outages
   - **Mitigation**: Health checks, auto-restart, redundant infrastructure (future)
   - **Monitoring**: Uptime monitoring

### Compliance Considerations

#### Data Privacy
- **GDPR**: User data handling, right to deletion
- **Data Minimization**: Only collect necessary data
- **Data Retention**: Configurable retention policies

#### Financial Regulations
- **Disclaimer**: Risk metrics are for informational purposes
- **Audit Trail**: User actions logged (future)
- **Data Accuracy**: Validation and verification of calculations

---

## Future Roadmap

### Short-Term (1-3 months)

1. **Performance Enhancements**
   - Redis caching layer
   - API response compression
   - Database query optimization

2. **Monitoring & Observability**
   - Prometheus metrics integration
   - Grafana dashboards
   - Error tracking (Sentry)

3. **Testing & Quality**
   - Comprehensive test suite
   - CI/CD pipeline
   - Code coverage improvement

### Medium-Term (3-6 months)

1. **Scaling**
   - Horizontal scaling support
   - Load balancing
   - Database read replicas

2. **Features**
   - Real-time updates (WebSocket)
   - PDF report generation
   - Excel export

3. **Integration**
   - Additional market data sources
   - Third-party API integrations

### Long-Term (6-12 months)

1. **Advanced Computing**
   - GPU acceleration (NVIDIA)
   - Distributed computing
   - Machine learning integration

2. **Architecture**
   - Microservices migration
   - Kubernetes deployment
   - Service mesh (Istio)

3. **Enterprise Features**
   - Multi-tenant architecture
   - Advanced RBAC
   - Audit logging

---

## Appendix

### A. Glossary

- **VaR**: Value at Risk
- **CVaR**: Conditional Value at Risk (Expected Shortfall)
- **PCA**: Principal Component Analysis
- **JWT**: JSON Web Token
- **RBAC**: Role-Based Access Control
- **SSE**: Server-Sent Events
- **SPA**: Single Page Application
- **ORM**: Object-Relational Mapping

### B. References

- [Performance Benchmarks](./BENCHMARKS.md)
- [Project Description](./PROJECT_DESCRIPTION.md)
- [API Documentation](./docs/api.md) (future)
- [Deployment Guide](./DEPLOYMENT_GUIDE.md)

### C. Contact Information

**Technical Support**: engineering@reserveone.com  
**Documentation**: This document  
**Repository**: [Git Repository URL]

---

**Document Version**: 1.0.0  
**Last Updated**: December 2025  
**Maintained by**: ReserveOne Engineering Team  
**Status**: Production-ready

# Platform 2: Crypto Reports - Institutional Digital Asset Intelligence Platform

**Document Version:** 1.0  
**Last Updated:** December 28, 2025  
**Platform:** Production Environment  
**Server:** Contabo Cloud VPS 60 SSD (173.212.208.123)

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [System Architecture](#system-architecture)
3. [Technology Stack](#technology-stack)
4. [Infrastructure](#infrastructure)
5. [API Documentation](#api-documentation)
6. [AI Integration](#ai-integration)
7. [Security Architecture](#security-architecture)
8. [Data Flow & Processing](#data-flow--processing)
9. [Deployment Architecture](#deployment-architecture)
10. [Monitoring & Logging](#monitoring--logging)
11. [Scalability & Performance](#scalability--performance)
12. [Development Workflow](#development-workflow)

---

## Executive Summary

The Scientific Analytics Alliance (SAA) platform is an institutional-grade digital asset intelligence system designed for comprehensive cryptocurrency analysis, compliance mapping, and investment decision support. The platform combines real-time market data aggregation, AI-powered analysis, and regulatory compliance tracking to provide institutional investors with actionable insights.

### Key Technical Highlights

- **Architecture:** Microservices-oriented monolith with clear separation of concerns
- **Frontend:** React 18 + TypeScript with modern UI/UX patterns
- **Backend:** Go 1.24 with Gin web framework for high performance
- **AI Integration:** NVIDIA API with multiple models (DeepSeek R1, Llama 3.1 70B, Llama 3.1 8B)
- **Infrastructure:** Contabo Cloud VPS with 18 vCPU cores, 96 GB RAM, 700 GB SSD
- **Real-time Capabilities:** WebSocket support for live price updates
- **Security:** Multi-layer security with CSP, rate limiting, and secure headers

---

## System Architecture

### 2.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Layer                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Web App    │  │  Mobile Web  │  │   API Client │      │
│  │  (React SPA) │  │   (PWA)      │  │   (External)│      │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘      │
└─────────┼──────────────────┼──────────────────┼─────────────┘
          │                  │                  │
          └──────────────────┼──────────────────┘
                             │
          ┌──────────────────▼──────────────────┐
          │         Nginx Reverse Proxy         │
          │    (SSL Termination, Static Files)  │
          └──────────────────┬──────────────────┘
                             │
          ┌──────────────────▼──────────────────┐
          │      Go Backend (Gin Framework)     │
          │  ┌────────────────────────────────┐ │
          │  │   API Layer (REST + WebSocket) │ │
          │  │   Business Logic Layer         │ │
          │  │   Data Aggregation Layer       │ │
          │  │   AI Integration Layer         │ │
          │  └────────────────────────────────┘ │
          └──────────────────┬──────────────────┘
                             │
    ┌────────────────────────┼────────────────────────┐
    │                        │                        │
┌───▼────┐          ┌────────▼────────┐      ┌────────▼────────┐
│CoinGecko│         │  NVIDIA API     │      │  ARIN Platform │
│   API   │         │  (AI Models)    │      │   (Export)     │
└─────────┘         └─────────────────┘      └─────────────────┘
```

### 2.2 Component Architecture

#### Frontend Architecture

```
src/
├── components/          # Reusable UI components
│   ├── AISummary.tsx           # AI-generated summaries
│   ├── AIDetailedAnalysisModal.tsx  # Detailed AI analysis
│   ├── ComplianceMap.tsx      # Regulatory compliance visualization
│   ├── MetricCard.tsx         # Metric display cards
│   ├── ImpactGraphNetwork.tsx # Network impact analysis
│   ├── PriceChartWidget.tsx   # Price chart integration
│   └── TradingViewSection.tsx # TradingView widget wrapper
├── pages/               # Page-level components
│   ├── Home.tsx        # Main dashboard
│   ├── TradingDashboard.tsx  # Trading analysis view
│   └── LandingPage.tsx       # Landing page
├── hooks/               # Custom React hooks
│   ├── useAssetMetrics.ts    # Asset data fetching
│   ├── useWebSocket.ts       # WebSocket connection
│   └── useReport.ts          # Report generation
├── utils/               # Utility functions
│   ├── apiConfig.ts          # API configuration
│   ├── formatters.ts        # Data formatting
│   └── tradingCalculations.ts # Trading calculations
└── types/               # TypeScript type definitions
    └── assetTypes.ts         # Asset-related types
```

#### Backend Architecture

```
internal/
├── api/                 # API handlers
│   ├── api.go          # API setup and routing
│   ├── live.go         # Live data endpoints
│   ├── crypto.go       # Cryptocurrency endpoints
│   ├── sentiment.go    # Sentiment analysis
│   ├── trading.go      # Trading-specific endpoints
│   ├── websocket.go    # WebSocket hub
│   └── arin.go         # ARIN platform integration
├── ai/                  # AI integration layer
│   ├── deepseek_client.go    # DeepSeek R1 client
│   ├── nvidia_client.go      # Llama 3.1 70B client
│   ├── sentiment_client.go   # Llama 3.1 8B client
│   └── cache.go              # AI response caching
├── core/                 # Core business logic
│   ├── aggregate.go         # Data aggregation engine
│   ├── asset_profile.go     # Asset profiling
│   └── types.go             # Core type definitions
├── integrations/         # External API integrations
│   ├── coingecko.go         # CoinGecko API client
│   ├── coingecko_adapter.go # CoinGecko adapter
│   ├── arin_client.go       # ARIN platform client
│   └── smart_cache.go       # Intelligent caching
├── reports/               # Report generation
│   ├── handlers.go              # Report handlers
│   ├── institutional_template.go # Institutional report template
│   ├── dynamic_template.go      # Dynamic content generation
│   └── asset_content.go         # Asset-specific content
├── services/             # Business services
│   ├── crypto_service.go  # Cryptocurrency service
│   └── analytics_service.go # Analytics service
└── utils/                # Utility functions
    └── formatters.go         # Data formatting utilities
```

---

## Technology Stack

### 3.1 Frontend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.2.0 | UI framework |
| TypeScript | 4.9.0 | Type safety |
| TailwindCSS | 3.3.0 | Utility-first CSS |
| Framer Motion | 10.16.0 | Animation library |
| React Router | 6.8.0 | Client-side routing |
| Lucide React | 0.294.0 | Icon library |
| Three.js | 0.160.1 | 3D visualization |
| vis-network | 10.0.2 | Network graph visualization |

**Build Tools:**
- React Scripts 5.0.1
- PostCSS 8.4.0
- Autoprefixer 10.4.0

### 3.2 Backend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| Go | 1.24.0 | Backend language |
| Gin | 1.9.1 | Web framework |
| Gorilla WebSocket | 1.5.3 | WebSocket support |
| godotenv | 1.5.1 | Environment variables |

**Key Go Packages:**
- `golang.org/x/time/rate` - Rate limiting
- `github.com/gin-gonic/gin` - HTTP router
- `github.com/gorilla/websocket` - WebSocket protocol

### 3.3 External Services & APIs

| Service | Purpose | Integration Type |
|---------|---------|------------------|
| CoinGecko API | Market data | REST API |
| NVIDIA API | AI model inference | REST API (Chat Completions) |
| TradingView | Price charts | Widget embedding |
| ARIN Platform | Data export | REST API |

### 3.4 Infrastructure Technologies

| Technology | Purpose |
|------------|---------|
| Nginx | Reverse proxy, SSL termination, static file serving |
| PM2 | Process management |
| Contabo Cloud VPS | Hosting infrastructure |

---

## Infrastructure

### 4.1 Server Specifications

**Provider:** Contabo  
**Service:** Cloud VPS 60 SSD  
**Server IP:** 173.212.208.123  

| Resource | Specification |
|----------|---------------|
| CPU | 18 vCPU cores |
| RAM | 96 GB |
| Storage | 700 GB SSD |
| Network | 1 Gbps |
| Operating System | Linux (Ubuntu/Debian) |

### 4.2 Network Architecture

```
Internet
   │
   ▼
┌─────────────────┐
│   DNS (Cloudflare) │
│  crypto.saa-alliance.com │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Nginx (Port 80/443) │
│   - SSL Termination   │
│   - Static Files      │
│   - Reverse Proxy     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Go Backend (Port 8083) │
│  - API Endpoints        │
│  - WebSocket Hub        │
│  - Report Generation    │
└─────────────────┘
```

### 4.3 Process Management

**Process Manager:** PM2  
**Configuration File:** `ecosystem.config.js`

**Managed Processes:**
- `saa-go-backend` - Main Go application

**PM2 Features:**
- Auto-restart on failure
- Log management
- Environment variable management
- Process monitoring

### 4.4 Deployment Structure

```
/var/www/saa-dashboard/
├── build/                    # Frontend build output
│   ├── static/
│   │   ├── js/
│   │   └── css/
│   └── index.html
├── internal/                 # Backend source code
├── saa-backend              # Compiled Go binary
├── main.go                  # Entry point
├── go.mod                   # Go dependencies
├── go.sum                   # Go checksums
├── ecosystem.config.js      # PM2 configuration
└── .env                     # Environment variables
```

---

## API Documentation

### 5.1 API Base URL

**Production:** `https://crypto.saa-alliance.com/api`  
**Development:** `http://localhost:8083/api`

### 5.2 Authentication

Currently, the API is publicly accessible. Future versions may implement:
- API key authentication
- OAuth 2.0
- JWT tokens

### 5.3 Core Endpoints

#### GET `/api/live/{symbol}`

**Description:** Get real-time metrics and institutional assessment for a cryptocurrency.

**Parameters:**
- `symbol` (path, required): Cryptocurrency symbol (e.g., `btc`, `eth`, `sol`)

**Response:**
```json
{
  "success": true,
  "data": {
    "asset": "Bitcoin",
    "symbol": "BTC",
    "fundamentals": { ... },
    "onchain": { ... },
    "market": { ... },
    "security": { ... },
    "regulatory": { ... },
    "esg": { ... }
  },
  "ai_summary": "AI-generated executive summary...",
  "rating": {
    "grade": "AA",
    "score": 85.5
  }
}
```

**Response Time:** ~1.2s average

#### GET `/api/crypto/{symbol}/report`

**Description:** Generate full institutional HTML report.

**Parameters:**
- `symbol` (path, required): Cryptocurrency symbol
- `lang` (query, optional): Language (`en` or `ru`, default: `en`)
- `nocache` (query, optional): Bypass cache (`true`/`false`, default: `true`)
- `format` (query, optional): Format (`html` or `download`, default: `html`)

**Response:** HTML document (text/html)

**Response Time:** ~6.5s average (includes AI generation)

#### GET `/api/sentiment/{symbol}`

**Description:** Get real-time sentiment analysis using AI.

**Parameters:**
- `symbol` (path, required): Cryptocurrency symbol

**Response:**
```json
{
  "success": true,
  "sentiment": {
    "score": 65,
    "label": "Bullish",
    "confidence": 0.85,
    "factors": [ ... ]
  }
}
```

**Response Time:** ~2.3s average

#### GET `/api/trading/orderbook/{symbol}`

**Description:** Get order book data for trading analysis.

**Parameters:**
- `symbol` (path, required): Cryptocurrency symbol

**Response Time:** ~0.8s average

#### WebSocket `/api/ws`

**Description:** Real-time price updates via WebSocket.

**Connection:**
```javascript
const ws = new WebSocket('wss://crypto.saa-alliance.com/api/ws');
```

**Message Format:**
```json
{
  "type": "price_update",
  "symbol": "BTC",
  "price": 45000.50,
  "timestamp": 1234567890
}
```

### 5.4 Response Format

All API responses follow a consistent format:

**Success Response:**
```json
{
  "success": true,
  "data": { ... },
  "message": "Optional message"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "ERROR_CODE",
  "message": "Human-readable error message"
}
```

### 5.5 Rate Limiting

- **Default:** 100 requests per minute per IP
- **AI Endpoints:** 20 requests per minute per IP
- **WebSocket:** No rate limit (connection-based)

---

## AI Integration

### 6.1 AI Models

#### DeepSeek R1 (Primary)

**Model:** `deepseek-ai/deepseek-r1`  
**Provider:** NVIDIA API  
**Use Case:** Executive summary generation  
**Configuration:**
- Temperature: 0.6
- Top-P: 0.7
- Max Tokens: 4,096
- Streaming: Enabled

**Performance:**
- Average Generation Time: 3.2s
- Success Rate: 98.5%
- Reasoning Tokens: ~1,200
- Content Tokens: ~450

#### Llama 3.1 70B (Fallback)

**Model:** `abacusai/dracarys-llama-3.1-70b-instruct`  
**Provider:** NVIDIA API  
**Use Case:** Executive summary fallback  
**Configuration:**
- Temperature: 0.5
- Top-P: 1.0
- Max Tokens: 1,024
- Streaming: Enabled

**Performance:**
- Average Generation Time: 4.5s
- Success Rate: 99.2%

#### Llama 3.1 8B (Sentiment)

**Model:** `meta/llama-3.1-8b-instruct`  
**Provider:** NVIDIA API  
**Use Case:** Real-time sentiment analysis  
**Configuration:**
- Temperature: 0.2
- Top-P: 0.7
- Max Tokens: 1,024
- Streaming: Enabled

**Performance:**
- Average Generation Time: 1.8s
- Success Rate: 99.5%

### 6.2 NVIDIA API Integration

#### 6.2.1 API Overview

**Base URL:** `https://integrate.api.nvidia.com/v1`  
**API Type:** REST API (OpenAI-compatible)  
**Authentication:** Bearer Token (API Key)  
**Documentation:** NVIDIA AI Foundation Models API

#### 6.2.2 Authentication

**Method:** Bearer Token Authentication  
**Header Format:**
```
Authorization: Bearer {API_KEY}
```

**API Key Management:**
- Environment Variable: `NVIDIA_API_KEY_CRYPTO` (primary)
- Fallback: `NVIDIA_API_KEY` (backward compatibility)
- Storage: Server-side only, never exposed to client

#### 6.2.3 API Endpoints

**Chat Completions Endpoint:**
```
POST https://integrate.api.nvidia.com/v1/chat/completions
```

**Request Headers:**
```http
Content-Type: application/json
Authorization: Bearer {API_KEY}
```

**Request Body Format:**
```json
{
  "model": "deepseek-ai/deepseek-r1",
  "messages": [
    {
      "role": "system",
      "content": "System prompt..."
    },
    {
      "role": "user",
      "content": "User prompt..."
    }
  ],
  "temperature": 0.6,
  "top_p": 0.7,
  "max_tokens": 4096,
  "stream": true
}
```

**Response Format (Streaming):**
```json
{
  "id": "chatcmpl-...",
  "object": "chat.completion.chunk",
  "created": 1234567890,
  "model": "deepseek-ai/deepseek-r1",
  "choices": [
    {
      "index": 0,
      "delta": {
        "content": "Generated text...",
        "reasoning_content": "Reasoning process..." // DeepSeek R1 only
      },
      "finish_reason": null
    }
  ]
}
```

**Response Format (Non-Streaming):**
```json
{
  "id": "chatcmpl-...",
  "object": "chat.completion",
  "created": 1234567890,
  "model": "abacusai/dracarys-llama-3.1-70b-instruct",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Full response text..."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 150,
    "completion_tokens": 450,
    "total_tokens": 600
  }
}
```

#### 6.2.4 Available Models

**DeepSeek R1 (Reasoning Model):**
- **Model ID:** `deepseek-ai/deepseek-r1`
- **Type:** Reasoning model with chain-of-thought
- **Features:** Streaming with reasoning_content
- **Use Case:** Executive summaries requiring analysis
- **Max Tokens:** 4,096
- **Recommended Parameters:**
  - Temperature: 0.6
  - Top-P: 0.7
  - Streaming: Enabled

**Llama 3.1 70B (Dracarys):**
- **Model ID:** `abacusai/dracarys-llama-3.1-70b-instruct`
- **Type:** Large language model
- **Features:** High-quality text generation
- **Use Case:** Fallback for executive summaries
- **Max Tokens:** 1,024
- **Recommended Parameters:**
  - Temperature: 0.5
  - Top-P: 1.0
  - Streaming: Enabled

**Llama 3.1 8B:**
- **Model ID:** `meta/llama-3.1-8b-instruct`
- **Type:** Small, fast language model
- **Features:** Fast inference, cost-effective
- **Use Case:** Real-time sentiment analysis
- **Max Tokens:** 1,024
- **Recommended Parameters:**
  - Temperature: 0.2
  - Top-P: 0.7
  - Streaming: Enabled

#### 6.2.5 Streaming Implementation

**Streaming Support:** Yes (recommended for all models)

**Streaming Protocol:**
- Server-Sent Events (SSE) format
- Each chunk is a JSON object
- `finish_reason: null` indicates more data
- `finish_reason: "stop"` indicates completion

**Streaming Processing:**
```go
// Example streaming response handling
for scanner.Scan() {
    line := scanner.Text()
    if strings.HasPrefix(line, "data: ") {
        data := line[6:] // Remove "data: " prefix
        if data == "[DONE]" {
            break
        }
        // Parse JSON chunk
        var chunk StreamChunk
        json.Unmarshal([]byte(data), &chunk)
        // Process content and reasoning_content
    }
}
```

**DeepSeek R1 Streaming:**
- Provides `reasoning_content` in delta
- Reasoning tokens streamed separately from content
- Allows real-time display of reasoning process

#### 6.2.6 Error Handling

**HTTP Status Codes:**
- `200 OK` - Success
- `400 Bad Request` - Invalid request format
- `401 Unauthorized` - Invalid API key
- `429 Too Many Requests` - Rate limit exceeded
- `500 Internal Server Error` - NVIDIA API error
- `503 Service Unavailable` - Service temporarily unavailable

**Error Response Format:**
```json
{
  "error": {
    "message": "Error description",
    "type": "invalid_request_error",
    "code": "rate_limit_exceeded"
  }
}
```

**Error Handling Strategy:**
1. Retry on 429 (rate limit) with exponential backoff
2. Fallback to alternative model on failure
3. Log all errors for monitoring
4. Return user-friendly error messages

#### 6.2.7 Rate Limits

**Rate Limit Information:**
- Limits vary by API plan/tier
- Typically: 50-200 requests per minute
- Token-based limits may apply
- Rate limit headers in response:
  - `X-RateLimit-Limit`
  - `X-RateLimit-Remaining`
  - `X-RateLimit-Reset`

**Rate Limit Handling:**
- Exponential backoff on 429 errors
- Request queuing for high-volume scenarios
- Cache utilization to reduce API calls

#### 6.2.8 Request/Response Logging

**Logging Strategy:**
- All API requests logged with timestamps
- Request/response metadata captured
- Performance metrics tracked
- Logs serialized and sent to browser console

**Log Format:**
```json
{
  "timestamp": "2025-12-28T02:30:00Z",
  "level": "INFO",
  "message": "🚀 NVIDIA API SERVICE (DeepSeek R1)"
}
```

**Logged Information:**
- API endpoint called
- Model used
- Request duration
- Token usage
- Response status
- Error details (if any)

#### 6.2.9 Implementation Details

**HTTP Client Configuration:**
```go
Client: &http.Client{
    Timeout: 60 * time.Second, // 60 second timeout
}
```

**Request Building:**
- JSON marshaling of request body
- Proper header setting
- Context support for cancellation

**Response Processing:**
- Streaming response parsing
- Token extraction
- Error detection and handling
- Log collection

### 6.3 AI Integration Architecture

```
Request
   │
   ▼
┌─────────────────┐
│  AI Client Layer │
│  - Request Build │
│  - Logging       │
│  - Error Handling│
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   NVIDIA API    │
│  Base URL:      │
│  integrate.api. │
│  nvidia.com/v1  │
│                 │
│  Endpoint:      │
│  /chat/         │
│  completions    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Response Parse │
│  - Streaming    │
│  - Token Extract│
│  - Cache Store  │
│  - Log Capture  │
└────────┬────────┘
         │
         ▼
   Response
```

### 6.4 Caching Strategy

**AI Response Caching:**
- Cache Duration: 5 minutes (300 seconds)
- Cache Key: `ai_summary_{symbol}_{timestamp}`
- Cache Invalidation: Manual or TTL expiration

**Cache Implementation:**
- In-memory Go map
- Thread-safe with mutex locks
- Automatic TTL expiration

### 6.5 NVIDIA API Client Implementation

#### 6.5.1 Client Structure

**DeepSeek Client:**
```go
type DeepSeekClient struct {
    APIKey  string
    BaseURL string  // "https://integrate.api.nvidia.com/v1"
    Client  *http.Client
    Logs    []APILog
}
```

**NVIDIA Client:**
```go
type NVIDIAClient struct {
    APIKey  string
    BaseURL string  // "https://integrate.api.nvidia.com/v1"
    Client  *http.Client
    Logs    []APILog
}
```

**Sentiment Client:**
```go
type SentimentClient struct {
    APIKey  string
    BaseURL string  // "https://integrate.api.nvidia.com/v1"
    Client  *http.Client
    Logs    []APILog
}
```

#### 6.5.2 Request Flow

1. **Client Initialization:**
   - API key loaded from environment
   - HTTP client configured with timeout
   - Base URL set to NVIDIA API endpoint

2. **Request Preparation:**
   - Build prompt based on asset data
   - Construct request body with model parameters
   - Set authentication headers

3. **API Call:**
   - POST request to `/chat/completions`
   - Stream response processing
   - Real-time token extraction

4. **Response Processing:**
   - Parse streaming chunks
   - Extract content and reasoning (DeepSeek R1)
   - Collect tokens and metadata
   - Build complete response

5. **Logging:**
   - Log all API interactions
   - Track performance metrics
   - Store logs for browser console

#### 6.5.3 Timeout Configuration

**HTTP Client Timeouts:**
- **DeepSeek R1:** 60 seconds (longer for reasoning)
- **Llama 3.1 70B:** 30 seconds
- **Llama 3.1 8B:** 20 seconds

**Rationale:**
- DeepSeek requires more time for reasoning phase
- Larger models need more processing time
- Smaller models are faster, shorter timeout sufficient

#### 6.5.4 Error Recovery

**Fallback Strategy:**
1. Primary: DeepSeek R1
2. Fallback: Llama 3.1 70B (if DeepSeek fails)
3. Final: Static fallback summary (if all AI fails)

**Retry Logic:**
- No automatic retries (to avoid rate limits)
- Fallback to alternative model on error
- User-friendly error messages

#### 6.5.5 Token Usage Tracking

**Tracked Metrics:**
- Prompt tokens (input)
- Completion tokens (output)
- Reasoning tokens (DeepSeek R1 only)
- Total tokens

**Usage Monitoring:**
- Logged for each request
- Available in browser console
- Can be used for cost tracking

---

## Security Architecture

### 7.1 Security Headers

**Content Security Policy (CSP):**
- Strict CSP for main application
- Relaxed CSP for report pages (TradingView compatibility)
- Blocks inline scripts (except for reports)

**Security Headers:**
```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### 7.2 Rate Limiting

**Implementation:** `golang.org/x/time/rate`

**Limits:**
- General API: 100 req/min
- AI Endpoints: 20 req/min
- WebSocket: Connection-based (no rate limit)

### 7.3 Input Validation

- Path parameter validation
- Query parameter sanitization
- Request size limits
- SQL injection prevention (no direct DB access)

### 7.4 API Key Management

**Environment Variables:**
- `NVIDIA_API_KEY_CRYPTO` - NVIDIA API key
- `COINGECKO_API_KEY` - CoinGecko API key (optional)

**Storage:**
- Stored in `.env` file (not in repository)
- Loaded via `godotenv` package
- Managed by PM2 in production

### 7.5 SSL/TLS

- SSL termination at Nginx level
- TLS 1.2+ required
- Certificate management via Let's Encrypt (assumed)

---

## Data Flow & Processing

### 8.1 Data Flow Diagram

```
User Request
   │
   ▼
┌─────────────────┐
│  API Handler     │
│  (Gin Router)    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Cache Check    │
│  (Smart Cache)  │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
 Cache Hit  Cache Miss
    │         │
    │         ▼
    │    ┌─────────────────┐
    │    │ External API    │
    │    │ (CoinGecko)     │
    │    └────────┬────────┘
    │             │
    └─────────────┘
         │
         ▼
┌─────────────────┐
│  Data Aggregation│
│  (core/aggregate)│
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Score Calculation│
│  (Rating System) │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  AI Generation  │
│  (if needed)    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Cache Store    │
└────────┬────────┘
         │
         ▼
   Response
```

### 8.2 Data Processing Pipeline

1. **Request Reception:** API handler receives request
2. **Cache Lookup:** Check in-memory cache
3. **External API Call:** Fetch from CoinGecko if cache miss
4. **Data Transformation:** Convert to internal format
5. **Aggregation:** Combine multiple data sources
6. **Score Calculation:** Compute institutional rating
7. **AI Enhancement:** Generate AI summary (if needed)
8. **Response Formatting:** Serialize to JSON/HTML
9. **Cache Storage:** Store result for future requests

### 8.3 Data Sources

| Source | Data Type | Update Frequency |
|--------|-----------|------------------|
| CoinGecko API | Market data, prices, volumes | Real-time |
| NVIDIA API | AI-generated summaries | On-demand |
| Internal Cache | Aggregated data | 60 seconds TTL |

---

## Deployment Architecture

### 9.1 Deployment Process

1. **Code Commit:** Push to repository
2. **Build Frontend:** `npm run build`
3. **Build Backend:** `go build -o saa-backend main.go`
4. **Upload to Server:** Via SSH/SCP
5. **Restart Services:** PM2 restart
6. **Health Check:** Verify endpoints

### 9.2 Deployment Scripts

**Frontend Build:**
```bash
CI=false npm run build
```

**Backend Build:**
```bash
go build -o saa-backend main.go
```

**PM2 Restart:**
```bash
pm2 restart saa-go-backend
```

### 9.3 Environment Configuration

**Development:**
- `.env` file with local configuration
- Development API keys
- Debug logging enabled

**Production:**
- Environment variables via PM2
- Production API keys
- Error logging only

### 9.4 Rollback Strategy

1. Keep previous binary: `saa-backend.backup`
2. PM2 can restart previous version
3. Frontend: Revert to previous build directory
4. Database: No database (stateless)

---

## Monitoring & Logging

### 10.1 Logging Strategy

**Backend Logging:**
- Structured logging via Go `log` package
- Log levels: INFO, WARNING, ERROR
- Log destination: PM2 log files

**Frontend Logging:**
- Browser console logging
- Error boundary for React errors
- API request/response logging

### 10.2 Monitoring Tools

**PM2 Monitoring:**
- Process status
- CPU/Memory usage
- Restart counts
- Log tailing

**Application Monitoring:**
- API response times
- Error rates
- Cache hit rates
- AI generation times

### 10.3 Health Checks

**Health Endpoint:** `/api/health` (if implemented)

**Monitoring Metrics:**
- Uptime percentage
- Average response time
- Error rate
- Resource utilization

---

## Scalability & Performance

### 11.1 Current Capacity

**Server Resources:**
- CPU: 18 cores (11-22% utilization)
- RAM: 96 GB (2.6-4.4% utilization)
- Storage: 700 GB (2.1-2.9% utilization)

**Performance Metrics:**
- Concurrent Users: 500+ supported
- API Throughput: 120 req/min (live data)
- AI Generation: 15 req/min (reports)

### 11.2 Scaling Strategies

**Vertical Scaling:**
- Current server has 10-15x headroom
- Can handle significant growth without upgrade

**Horizontal Scaling:**
- Multiple backend instances behind load balancer
- Shared cache (Redis) for distributed caching
- Stateless design enables easy scaling

**Optimization Opportunities:**
- Redis caching layer
- CDN for static assets
- Database for persistent storage
- Request queuing for AI endpoints

### 11.3 Performance Bottlenecks

**Current Bottlenecks:**
1. External API rate limits (CoinGecko: 50 req/min)
2. AI generation time (3-5 seconds)
3. Network latency to external APIs

**Not Bottlenecks:**
- Server CPU/Memory (ample capacity)
- Database queries (no database)
- Internal processing (very fast)

---

## Development Workflow

### 12.1 Development Setup

**Prerequisites:**
- Node.js 18+
- Go 1.24+
- npm/yarn

**Frontend Setup:**
```bash
npm install
npm start  # Development server on :3000
```

**Backend Setup:**
```bash
go mod download
go run main.go  # Server on :8083
```

### 12.2 Code Organization

**Frontend:**
- Component-based architecture
- TypeScript for type safety
- Custom hooks for data fetching
- Utility functions for common operations

**Backend:**
- Layered architecture (API → Service → Core)
- Clear separation of concerns
- Dependency injection where appropriate
- Error handling at each layer

### 12.3 Testing Strategy

**Frontend:**
- Component testing (if implemented)
- Manual testing in browser
- Error boundary testing

**Backend:**
- Unit tests (if implemented)
- Integration tests for API endpoints
- Manual testing via curl/Postman

### 12.4 Version Control

**Repository:** Git  
**Branching Strategy:** Main branch for production  
**Deployment:** Manual deployment process

---

## Appendix A: Configuration Files

### A.1 PM2 Configuration (ecosystem.config.js)

```javascript
module.exports = {
  apps: [{
    name: 'saa-go-backend',
    script: './saa-backend',
    cwd: '/var/www/saa-dashboard',
    env: {
      GIN_MODE: 'release',
      PORT: '8083',
      NVIDIA_API_KEY_CRYPTO: process.env.NVIDIA_API_KEY_CRYPTO || ''
    },
    error_file: '/var/log/saa-backend-error.log',
    out_file: '/var/log/saa-backend-out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    autorestart: true,
    max_restarts: 10,
    restart_delay: 3000
  }]
};
```

### A.2 Environment Variables

```env
# API Configuration
NVIDIA_API_KEY_CRYPTO=nvapi-...
COINGECKO_API_KEY=optional_key

# Server Configuration
PORT=8083
GIN_MODE=release

# Frontend
REACT_APP_API_URL=https://crypto.saa-alliance.com
```

---

## Appendix B: API Endpoints Summary

| Method | Endpoint | Description | Response Time |
|--------|----------|-------------|---------------|
| GET | `/api/live/{symbol}` | Live metrics | ~1.2s |
| GET | `/api/crypto/{symbol}/report` | Full report | ~6.5s |
| GET | `/api/sentiment/{symbol}` | Sentiment analysis | ~2.3s |
| GET | `/api/trading/orderbook/{symbol}` | Order book | ~0.8s |
| GET | `/api/trading/momentum/{symbol}` | Momentum | ~1.1s |
| GET | `/api/analyze/{symbol}` | Analytics | ~2.0s |
| WS | `/api/ws` | WebSocket | Real-time |

---

## Appendix C: Technology Versions

### C.1 Frontend Dependencies

```json
{
  "react": "^18.2.0",
  "typescript": "^4.9.0",
  "tailwindcss": "^3.3.0",
  "framer-motion": "^10.16.0"
}
```

### C.2 Backend Dependencies

```go
github.com/gin-gonic/gin v1.9.1
github.com/gorilla/websocket v1.5.3
golang.org/x/time v0.14.0
```

---

## Appendix D: NVIDIA API Reference

### D.1 API Endpoint Details

**Full Endpoint URL:**
```
POST https://integrate.api.nvidia.com/v1/chat/completions
```

**Request Example (DeepSeek R1):**
```bash
curl -X POST https://integrate.api.nvidia.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $NVIDIA_API_KEY" \
  -d '{
    "model": "deepseek-ai/deepseek-r1",
    "messages": [
      {"role": "system", "content": "You are a financial analyst."},
      {"role": "user", "content": "Analyze Bitcoin..."}
    ],
    "temperature": 0.6,
    "top_p": 0.7,
    "max_tokens": 4096,
    "stream": true
  }'
```

### D.2 Model Comparison

| Model | Tokens | Speed | Use Case | Cost |
|-------|--------|-------|----------|------|
| DeepSeek R1 | 4,096 | Medium | Complex analysis | Higher |
| Llama 3.1 70B | 1,024 | Slower | High-quality summaries | Medium |
| Llama 3.1 8B | 1,024 | Fast | Quick sentiment | Lower |

### D.3 Streaming Response Format

**SSE Format:**
```
data: {"id":"...","choices":[{"delta":{"content":"..."}}]}

data: {"id":"...","choices":[{"delta":{"content":"..."}}]}

data: [DONE]
```

**Processing:**
- Each line prefixed with `data: `
- JSON object per line
- `[DONE]` indicates completion
- Empty lines are separators

### D.4 Best Practices

1. **Always use streaming** for better user experience
2. **Set appropriate timeouts** based on model size
3. **Implement retry logic** for transient errors
4. **Cache responses** to reduce API calls
5. **Monitor token usage** for cost optimization
6. **Handle rate limits** gracefully
7. **Log all interactions** for debugging

### D.5 Where to Find NVIDIA API Resources

#### API Keys & Account Management

**NVIDIA AI Foundation Models Platform:**
- **Website:** https://build.nvidia.com/
- **Sign Up:** Create account at https://build.nvidia.com/
- **API Keys:** Available in account dashboard after registration
- **Documentation:** https://build.nvidia.com/docs

**Getting API Key:**
1. Visit https://build.nvidia.com/
2. Sign up or log in to your account
3. Navigate to API Keys section
4. Generate new API key
5. Copy and store securely (use environment variables)

**API Key Format:**
- Starts with `nvapi-`
- Example: `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`
- Keep secure, never commit to repository

#### Official Documentation

**NVIDIA AI Foundation Models API Documentation:**
- **Base URL:** https://build.nvidia.com/docs
- **API Reference:** https://build.nvidia.com/docs/api-reference
- **Models Catalog:** https://build.nvidia.com/models
- **Getting Started:** https://build.nvidia.com/docs/getting-started

**Key Documentation Pages:**
- Chat Completions API: `/docs/api-reference/chat-completions`
- Available Models: `/docs/models`
- Rate Limits: `/docs/rate-limits`
- Authentication: `/docs/authentication`

#### Model Information

**Available Models:**
- **DeepSeek R1:** https://build.nvidia.com/models/deepseek-r1
- **Llama 3.1 Models:** https://build.nvidia.com/models/llama-3-1
- **Model Comparison:** https://build.nvidia.com/models

**Model Specifications:**
- Token limits
- Pricing information
- Performance benchmarks
- Use case recommendations

#### Code Examples & SDKs

**Python Examples:**
- Official Python SDK: Available in NVIDIA documentation
- Example code: https://build.nvidia.com/docs/examples

**Go Implementation:**
- Our implementation: `internal/ai/deepseek_client.go`
- Our implementation: `internal/ai/nvidia_client.go`
- Our implementation: `internal/ai/sentiment_client.go`

**cURL Examples:**
- Available in API documentation
- Can be found in our code comments

#### Support & Community

**NVIDIA Support:**
- **Support Portal:** https://build.nvidia.com/support
- **Community Forums:** Available on NVIDIA platform
- **GitHub:** NVIDIA AI Foundation Models repositories

**Troubleshooting:**
- Check API status: Monitor NVIDIA platform status
- Review error messages: Detailed in API responses
- Check rate limits: Review account dashboard

#### Local Implementation Files

**In This Project:**

**API Client Implementations:**
- `internal/ai/deepseek_client.go` - DeepSeek R1 client
- `internal/ai/nvidia_client.go` - Llama 3.1 70B client
- `internal/ai/sentiment_client.go` - Llama 3.1 8B client

**Configuration:**
- `main.go` - API key initialization
- `ecosystem.config.js` - Environment variable setup
- `.env` - API key storage (not in repository)

**Usage Examples:**
- `internal/reports/handlers.go` - AI summary generation
- `internal/api/sentiment.go` - Sentiment analysis usage

**Documentation:**
- `AI_MODELS_USAGE_GUIDE.md` - Detailed usage guide
- `AI_MODELS_VERSIONS.md` - Model versions and updates

#### Quick Reference Links

| Resource | URL |
|---------|-----|
| NVIDIA AI Platform | https://build.nvidia.com/ |
| API Documentation | https://build.nvidia.com/docs |
| Models Catalog | https://build.nvidia.com/models |
| API Reference | https://build.nvidia.com/docs/api-reference |
| Getting Started | https://build.nvidia.com/docs/getting-started |
| Account Dashboard | https://build.nvidia.com/dashboard |

---

**Document Prepared By:** Scientific Analytics Alliance - Engineering Team  
**For Technical Inquiries:** Contact development team  
**Last Review Date:** December 28, 2025

# Platform 3: Investment Bot - Institutional-Grade Stock Analysis Platform

**Version:** 2.0  
**Last Updated:** December 2025  
**Document Type:** Technical Documentation  
**Status:** Production-Ready System

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [System Architecture](#system-architecture)
3. [Technology Stack](#technology-stack)
4. [Module Structure](#module-structure)
5. [Data Sources & Integration](#data-sources--integration)
6. [API Documentation](#api-documentation)
7. [Deployment & Infrastructure](#deployment--infrastructure)
8. [Performance & Scalability](#performance--scalability)
9. [Security](#security)
10. [Monitoring & Observability](#monitoring--observability)
11. [Development & Testing](#development--testing)
12. [Configuration & Environment](#configuration--environment)

---

## Executive Summary

### System Overview

The Investment Bot is an institutional-grade stock analysis platform that generates comprehensive HTML reports for S&P 500 companies. The system combines fundamental analysis, technical analysis, quantitative modeling, and AI-powered insights to deliver BlackRock-standard investment research reports.

### Key Capabilities

- **Automated Report Generation:** Comprehensive HTML reports in 20-180 seconds
- **Multi-Factor Analysis:** Valuation, Quality, Momentum, Risk, and ESG scoring
- **Advanced Analytics:** DCF modeling, peer comparison, scenario analysis
- **AI Integration:** NVIDIA AI-powered report generation and insights
- **Multi-language Support:** English (primary), Russian, German, Spanish
- **Production API:** RESTful API for integration and automation
- **Real-time Data:** Integration with Yahoo Finance, SEC EDGAR, TradingView

### Production Environment

- **Server:** Contabo Cloud VPS 60 SSD
- **IP Address:** 173.212.208.123
- **Port:** 5001
- **Hardware:** 18 CPU cores, 96 GB RAM, 700 GB SSD
- **Service:** Gunicorn WSGI Server (4 workers)
- **Web Server:** Nginx (reverse proxy)
- **Project Path:** `/opt/investment-bot/`

---

## System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Client Layer                           │
│  • Web Dashboard (Browser)                                  │
│  • API Clients (REST)                                       │
│  • WordPress Plugin                                         │
└───────────────────────┬─────────────────────────────────────┘
                        │
┌───────────────────────▼─────────────────────────────────────┐
│                    Load Balancer                            │
│                    (Nginx Reverse Proxy)                    │
│  • SSL/TLS Termination                                      │
│  • Rate Limiting                                            │
│  • Request Routing                                          │
└───────────────────────┬─────────────────────────────────────┘
                        │
┌───────────────────────▼─────────────────────────────────────┐
│                  Application Layer                          │
│  ┌─────────────────────────────────────────────────────┐   │
│  │         Flask Web Application (stable_server.py)    │   │
│  │  • Web Dashboard                                    │   │
│  │  • Report Generation Endpoints                      │   │
│  │  • Health Checks                                    │   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │         FastAPI API Service (app/api/v1/)          │   │
│  │  • RESTful API                                      │   │
│  │  • Comprehensive Analysis                           │   │
│  │  • Background Tasks                                 │   │
│  └─────────────────────────────────────────────────────┘   │
└───────────────────────┬─────────────────────────────────────┘
                        │
┌───────────────────────▼─────────────────────────────────────┐
│                    Business Logic Layer                     │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │Valuation │ │   Risk   │ │   ESG    │ │Analytics │      │
│  │  Engine  │ │  Engine  │ │  Engine  │ │  Engine  │      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │Scenarios │ │   ML     │ │  NVIDIA  │ │Translation│      │
│  │ Analysis │ │ Models   │ │   AI     │ │  Module  │      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
└───────────────────────┬─────────────────────────────────────┘
                        │
┌───────────────────────▼─────────────────────────────────────┐
│                    Data Access Layer                        │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │   Data   │ │ SEC      │ │TradingView│ │  Cache   │      │
│  │  Loaders │ │  EDGAR   │ │    API    │ │  (Redis) │      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
└───────────────────────┬─────────────────────────────────────┘
                        │
┌───────────────────────▼─────────────────────────────────────┐
│                  External Data Sources                      │
│  • Yahoo Finance API                                        │
│  • SEC EDGAR API                                            │
│  • TradingView API                                          │
│  • NVIDIA AI API                                            │
└─────────────────────────────────────────────────────────────┘
```

### Request Flow

1. **Client Request** → Nginx (reverse proxy)
2. **Nginx** → Gunicorn WSGI Server (4 workers)
3. **Flask/FastAPI** → Business Logic Modules
4. **Modules** → Data Loaders → External APIs
5. **Data Processing** → Report Generation → HTML Response
6. **Response** → Nginx → Client

### Component Architecture

#### Core Components

1. **Web Server Layer**
   - `stable_server.py` - Main Flask application
   - `web_dashboard.py` - Web dashboard interface
   - `universal_dashboard.py` - Universal dashboard handler

2. **Report Generation Engine**
   - `investment_bot_v2.py` - V2 report generator (primary)
   - `investment_bot_fixed.py` - Legacy report generator
   - `universal_report_generator.py` - Universal report engine

3. **API Layer**
   - `app/api/v1/main.py` - FastAPI v1 endpoints
   - RESTful API for programmatic access

4. **Analytics Modules**
   - `app/analytics/` - Technical and fundamental analysis
   - `app/valuation/` - Valuation models and scoring
   - `app/risk/` - Risk assessment models
   - `app/esg/` - ESG scoring framework

5. **Data Access**
   - `app/dataio/` - Data loaders and fetchers
   - `app/providers/` - External API integrations

6. **AI Integration**
   - `app/nvidia/` - NVIDIA AI modules
   - AI report generation, signal generation, portfolio optimization

---

## Technology Stack

### Backend Framework

| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| **Web Framework** | Flask | 3.0.0 | Primary web application |
| **API Framework** | FastAPI | 0.104.1 | RESTful API service |
| **WSGI Server** | Gunicorn | 21.2.0 | Production server |
| **Python** | Python | 3.9+ | Programming language |
| **Template Engine** | Jinja2 | 3.1.2 | HTML template rendering |

### Data Processing

| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| **Data Analysis** | Pandas | 2.1.3 | Data manipulation and analysis |
| **Numerical Computing** | NumPy | 1.25.2 | Numerical operations |
| **Scientific Computing** | SciPy | >=1.11.0 | Statistical functions |
| **Data Fetching** | yfinance | 0.2.28 | Yahoo Finance API client |
| **HTTP Client** | requests | 2.31.0 | HTTP requests |

### Database & Storage

| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| **Relational DB** | PostgreSQL | - | Metadata storage (optional) |
| **Analytics DB** | DuckDB | 0.9.2 | Columnar analytics database |
| **Cache** | Redis | 5.0.1 | Caching layer |
| **ORM** | SQLAlchemy | 2.0.23 | Database ORM |
| **Migrations** | Alembic | 1.13.0 | Database migrations |

### Machine Learning & AI

| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| **ML Framework** | scikit-learn | 1.3.2 | Machine learning models |
| **NVIDIA AI** | Custom API | - | AI-powered analysis |
| **NLP** | Built-in | - | Text processing |

### Visualization

| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| **Plotting** | Matplotlib | 3.8.2 | Static charts |
| **Image Processing** | Pillow | 10.1.0 | Image manipulation |
| **TradingView** | Widgets | - | Interactive charts |

### Monitoring & Logging

| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| **Metrics** | prometheus-client | 0.19.0 | Prometheus metrics |
| **Logging** | structlog | 23.2.0 | Structured logging |
| **System Metrics** | psutil | 5.9.6 | System monitoring |

### Security

| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| **Authentication** | python-jose | 3.3.0 | JWT tokens |
| **Password Hashing** | passlib | 1.7.4 | Password security |
| **Crypto** | cryptography | - | Encryption |

### Development Tools

| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| **Testing** | pytest | 7.4.3 | Unit testing |
| **Code Quality** | black | 23.11.0 | Code formatting |
| **Linting** | flake8 | 6.1.0 | Code linting |
| **Type Checking** | mypy | 1.7.1 | Static type checking |
| **CLI Framework** | typer | 0.9.0 | Command-line interface |

### Infrastructure

| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| **Web Server** | Nginx | - | Reverse proxy, load balancing |
| **Process Manager** | Supervisor | 4.2.5 | Process management |
| **Containerization** | Docker | - | Containerization (optional) |
| **Orchestration** | Kubernetes | - | Container orchestration (optional) |

---

## Module Structure

### Application Modules (`app/`)

```
app/
├── analytics/              # Analysis engines
│   ├── fa.py              # Fundamental analysis
│   ├── ta.py              # Technical analysis
│   ├── signals.py         # Trading signals
│   └── realtime_analytics.py  # Real-time analytics
│
├── api/                   # API layer
│   └── v1/
│       └── main.py        # FastAPI endpoints
│
├── dataio/                # Data access layer
│   ├── loaders.py         # Data loaders
│   ├── tradingview_data.py # TradingView integration
│   ├── segment_loader.py  # Segment data loader
│   └── sources.yaml       # Data source configuration
│
├── esg/                   # ESG analysis
│   └── esg_scoring.py     # ESG scoring framework
│
├── infra/                 # Infrastructure
│   ├── cache_redis.py     # Redis cache
│   ├── database_postgresql.py # PostgreSQL integration
│   ├── storage_duckdb.py  # DuckDB storage
│   └── config.py          # Configuration
│
├── ml/                    # Machine learning
│   ├── price_predictor.py # Price prediction models
│   └── sentiment_analyzer.py # Sentiment analysis
│
├── monitoring/            # Monitoring & observability
│   ├── metrics.py         # Metrics collection
│   ├── health.py          # Health checks
│   └── logging.py         # Logging configuration
│
├── nvidia/                # NVIDIA AI integration
│   ├── ai_report_generator.py # AI report generation
│   ├── signal_generator.py    # Signal generation
│   ├── portfolio_optimizer.py # Portfolio optimization
│   ├── rag_system.py          # RAG system
│   ├── document_parser.py     # Document parsing
│   ├── ocr_processor.py       # OCR processing
│   └── dcf_reasoning.py       # DCF reasoning
│
├── providers/             # External providers
│   └── sec_edgar.py       # SEC EDGAR integration
│
├── quality/               # Data quality
│   └── validators.py      # Data validation
│
├── reports/               # Report generation
│   └── universal_report_generator.py # Universal report engine
│
├── risk/                  # Risk analysis
│   ├── comprehensive_risk.py # 6-dimensional risk model
│   └── risk_matrix.py     # Risk matrix
│
├── scenarios/             # Scenario analysis
│   └── scenario_analysis.py # Base/Bull/Bear scenarios
│
├── security/              # Security
│   ├── compliance.py      # Compliance checks
│   └── rbac.py            # Role-based access control
│
├── translation/           # Translation
│   ├── bilingual_report.py # Bilingual reports
│   └── multilingual_translations.py # Multilingual support
│
├── valuation/             # Valuation models
│   ├── valuation_scoring.py      # Valuation scoring
│   ├── peer_comparison.py        # Peer comparison
│   ├── dcf_model.py              # DCF model
│   ├── ev_sales_valuation.py     # EV/Sales valuation
│   ├── historical_bands.py       # Historical valuation bands
│   ├── quality_scoring_vanguard.py # Quality scoring
│   └── valuation_method_selector.py # Method selection
│
└── validation/            # Validation
    └── data_validation.py # Data validation
```

### Key Modules Overview

#### 1. Valuation Engine (`app/valuation/`)

**Purpose:** Multi-factor valuation scoring and modeling

**Key Components:**
- `valuation_scoring.py` - Percentile-based valuation scoring
- `dcf_model.py` - Discounted Cash Flow model with WACC
- `peer_comparison.py` - Automated peer group selection and comparison
- `historical_bands.py` - Historical valuation analysis

**Features:**
- Percentile ranking vs. peers (not absolute thresholds)
- Growth-adjusted metrics (PEG, P/E/ROE)
- Multi-factor weighted scoring
- Scenario-based DCF (Bull/Base/Bear)

#### 2. Risk Engine (`app/risk/`)

**Purpose:** Comprehensive risk assessment

**Key Components:**
- `comprehensive_risk.py` - 6-dimensional risk model
- `risk_matrix.py` - Risk matrix with probability/impact

**Risk Dimensions:**
1. Market Risk (15%) - Beta, Volatility, Max Drawdown
2. Credit Risk (20%) - Debt/Equity, Debt/EBITDA, Interest Coverage
3. Liquidity Risk (15%) - Current Ratio, Quick Ratio, Cash Burn
4. Earnings Quality (15%) - FCF/NI ratio, Accruals
5. Business Model Risk (20%) - Revenue concentration, Moat
6. ESG/Regulatory Risk (15%) - ESG score, Regulatory actions

#### 3. Analytics Engine (`app/analytics/`)

**Purpose:** Technical and fundamental analysis

**Key Components:**
- `fa.py` - Fundamental analysis (P/E, ROE, growth metrics)
- `ta.py` - Technical analysis (RSI, MACD, moving averages)
- `signals.py` - Trading signal generation

#### 4. NVIDIA AI Integration (`app/nvidia/`)

**Purpose:** AI-powered analysis and insights using NVIDIA NIM (NVIDIA Inference Microservices) API

**Architecture:**
- **API Type:** REST API (NVIDIA NIM)
- **Base URL:** `https://integrate.api.nvidia.com/v1`
- **Authentication:** Bearer token (single API key for all models)
- **Integration Pattern:** Isolated module with fallback mechanisms
- **Configuration:** Centralized in `app/nvidia/config.py`

**Key Components:**
- `config.py` - Centralized configuration and feature flags
- `ai_report_generator.py` - AI-powered report generation
- `signal_generator.py` - AI-generated trading signals
- `portfolio_optimizer.py` - Portfolio optimization using AI
- `rag_system.py` - Retrieval-Augmented Generation for financial data
- `document_parser.py` - Document parsing and extraction
- `ocr_processor.py` - OCR processing for financial documents
- `dcf_reasoning.py` - DCF model validation using AI reasoning
- `deepseek_reasoning.py` - Advanced reasoning for complex analysis
- `translation_enhancer.py` - Multi-language translation enhancement
- `rag_peer_comparison.py` - Enhanced peer comparison using RAG

**AI Models Used:**

| Model Category | Model Name | Purpose | Default |
|---------------|------------|---------|---------|
| **Primary LLM** | `meta/llama-3.1-70b-instruct` | Main report generation | ✅ Default |
| **Reasoning** | `nvidia/nemotron-3-nano-30b-a3b` | DCF validation, complex analysis | ✅ Default |
| **OCR** | `nvidia/nemoretriever-ocr-v1` | Document OCR | ✅ Default |
| **Embeddings** | `nvidia/llama-3_2-nemoretriever-300m-embed-v2` | RAG embeddings | ✅ Default |
| **Alternative LLM** | `qwen/qwen3-next-80b-a3b-instruct` | Alternative LLM option | Available |
| **Advanced Reasoning** | `deepseek/deepseek-r1-0528` | Advanced reasoning tasks | Available |
| **Ultra Reasoning** | `nvidia/llama-3.1-nemotron-ultra-253b-v1` | Ultra-large model | Available |
| **Translation** | `nvidia/riva-translate-4b-instruct-v1_1` | Multi-language translation | Available |
| **Document Parsing** | `nvidia/nemotron-parse` | Structured document parsing | Available |

**Feature Flags:**
- `USE_NVIDIA_AI_REPORTS` - Enable/disable AI report generation
- `USE_NVIDIA_SIGNALS` - Enable/disable AI signal generation
- `USE_NVIDIA_OCR` - Enable/disable OCR processing
- `USE_NVIDIA_RAG` - Enable/disable RAG system
- `NVIDIA_FALLBACK_TO_TEMPLATES` - Enable fallback to templates (default: true)

**Automatic Integrations:**
- DCF Reasoning Validation - Automatically validates DCF results for all tickers
- RAG-Enhanced Peer Comparison - Automatically enhances peer selection using embeddings
- AI Report Generation - Optional AI-powered analysis sections in reports

**API Characteristics:**
- **Single API Key:** One API key (`NVIDIA_NIM_API_KEY`) works for all models
- **Timeout:** 120 seconds (configurable via `NVIDIA_TIMEOUT_SECONDS`)
- **Retries:** 2 retries with exponential backoff (configurable)
- **Error Handling:** Graceful fallback to templates if API unavailable
- **Rate Limits:** Varies by subscription plan (free tier has limits)

**Performance Impact:**
- **Report Generation:** +20-120 seconds when AI features enabled
- **DCF Validation:** +1-3 seconds per DCF calculation
- **Peer Comparison:** +2-5 seconds for enhanced peer selection

**Security:**
- API key stored in environment variables only
- Secure HTTPS connections
- No sensitive financial data sent to API (only metrics and analysis prompts)

See [NVIDIA AI API](#4-nvidia-ai-api) section in Data Sources for detailed API documentation.

#### 5. Data Access Layer (`app/dataio/`)

**Purpose:** Data fetching and normalization

**Key Components:**
- `loaders.py` - Generic data loaders
- `tradingview_data.py` - TradingView-style data fetching
- `segment_loader.py` - Segment data loading

**Data Sources:**
- Yahoo Finance API
- SEC EDGAR API
- TradingView API

---

## Data Sources & Integration

### External Data Sources

#### 1. Yahoo Finance API

**Purpose:** Primary source for market data

**Data Provided:**
- Stock prices (real-time and historical)
- Fundamental metrics (P/E, ROE, revenue, etc.)
- Financial statements
- Analyst consensus
- Dividends
- Corporate actions

**Integration:** `yfinance` library (v0.2.28)

**Rate Limits:** ~2,000 requests/hour (unofficial)

**Caching Strategy:** Redis cache with 1-hour TTL for price data

#### 2. SEC EDGAR API

**Purpose:** Official financial data from SEC filings

**Data Provided:**
- 10-K, 10-Q filings
- Financial statements
- Segment data
- Executive compensation
- Risk factors

**Integration:** `app/providers/sec_edgar.py`

**Rate Limits:** 10 requests/second

**Caching Strategy:** File-based caching for filings

#### 3. TradingView API

**Purpose:** Advanced market data and analytics

**Data Provided:**
- Extended market data
- Technical indicators
- Chart data
- Market sentiment

**Integration:** `app/dataio/tradingview_data.py`

#### 4. NVIDIA AI API

**Purpose:** AI-powered analysis and insights

**API Details:**
- **Base URL:** `https://integrate.api.nvidia.com/v1`
- **Authentication:** Bearer token (API key)
- **API Key Variable:** `NVIDIA_NIM_API_KEY`
- **Integration:** `app/nvidia/` modules
- **Timeout:** 120 seconds per request (configurable)
- **Max Retries:** 2 (configurable)

**Services & Models:**

| Service | Model | Purpose | Status |
|---------|-------|---------|--------|
| **LLM Reports** | `meta/llama-3.1-70b-instruct` | AI-powered report generation | ✅ Active |
| **Reasoning** | `nvidia/nemotron-3-nano-30b-a3b` | Complex financial analysis | ✅ Active |
| **DCF Validation** | `nvidia/nemotron-3-nano-30b-a3b` | DCF model validation | ✅ Active |
| **OCR Processing** | `nvidia/nemoretriever-ocr-v1` | Document OCR | ✅ Available |
| **RAG System** | `nvidia/llama-3_2-nemoretriever-300m-embed-v2` | Financial knowledge retrieval | ✅ Available |
| **Document Parsing** | `nvidia/nemotron-parse` | Document parsing | ✅ Available |
| **Translation** | `nvidia/riva-translate-4b-instruct-v1_1` | Multi-language translation | ✅ Available |
| **Alternative LLM** | `qwen/qwen3-next-80b-a3b-instruct` | Alternative LLM model | ✅ Available |
| **Advanced Reasoning** | `deepseek/deepseek-r1-0528` | Advanced reasoning tasks | ✅ Available |
| **Ultra Reasoning** | `nvidia/llama-3.1-nemotron-ultra-253b-v1` | Ultra-large model reasoning | ✅ Available |

**Implementation Modules:**

1. **AI Report Generator** (`app/nvidia/ai_report_generator.py`)
   - Generates AI-powered investment analysis
   - Integrates with report generation pipeline
   - Fallback to templates if API unavailable

2. **Signal Generator** (`app/nvidia/signal_generator.py`)
   - Generates trading signals using AI
   - Analyzes financial patterns and trends

3. **Portfolio Optimizer** (`app/nvidia/portfolio_optimizer.py`)
   - AI-powered portfolio optimization
   - Risk-adjusted optimization strategies

4. **DCF Reasoning Validator** (`app/nvidia/dcf_reasoning.py`)
   - Validates DCF model assumptions and results
   - Provides warnings for unrealistic valuations
   - Automatic integration in DCF calculations

5. **RAG System** (`app/nvidia/rag_system.py`)
   - Retrieval-Augmented Generation for financial data
   - Enhanced peer comparison using embeddings
   - Financial knowledge base queries

6. **OCR Processor** (`app/nvidia/ocr_processor.py`)
   - Document OCR processing
   - Financial document extraction

7. **Document Parser** (`app/nvidia/document_parser.py`)
   - Structured document parsing
   - Financial statement extraction

8. **Translation Enhancer** (`app/nvidia/translation_enhancer.py`)
   - Multi-language translation for reports
   - Context-aware financial terminology

9. **DeepSeek Reasoning** (`app/nvidia/deepseek_reasoning.py`)
   - Advanced reasoning for complex analysis
   - Deep financial model validation

**Configuration:**

**Environment Variables:**
```bash
# API Configuration
NVIDIA_NIM_API_KEY=your_api_key_here
NVIDIA_NIM_BASE_URL=https://integrate.api.nvidia.com/v1

# Feature Flags (enable/disable specific features)
USE_NVIDIA_AI_REPORTS=true
USE_NVIDIA_SIGNALS=false
USE_NVIDIA_OCR=false
USE_NVIDIA_RAG=false

# Model Selection
NVIDIA_LLM_MODEL=meta/llama-3.1-70b-instruct
NVIDIA_REASONING_MODEL=nvidia/nemotron-3-nano-30b-a3b
NVIDIA_OCR_MODEL=nvidia/nemoretriever-ocr-v1
NVIDIA_EMBED_MODEL=nvidia/nv-embedqa-e5-v5

# Timeout & Retry Settings
NVIDIA_TIMEOUT_SECONDS=120
NVIDIA_MAX_RETRIES=2
NVIDIA_FALLBACK_TO_TEMPLATES=true
```

**Configuration Class:** `app/nvidia/config.py`

**API Request Format:**

```python
# Standard Chat Completions API
POST https://integrate.api.nvidia.com/v1/chat/completions
Headers:
  Authorization: Bearer {API_KEY}
  Content-Type: application/json
Body:
{
  "model": "meta/llama-3.1-70b-instruct",
  "messages": [
    {"role": "system", "content": "You are a financial analyst..."},
    {"role": "user", "content": "Analyze AAPL stock..."}
  ],
  "temperature": 0.7,
  "max_tokens": 2000,
  "stream": false
}
```

**Rate Limits:**
- Varies by model and subscription plan
- Free tier has rate limits
- Automatic retry mechanism with exponential backoff

**Error Handling:**
- Automatic fallback to templates if API unavailable
- Retry mechanism (configurable, default: 2 retries)
- Graceful degradation (system continues without AI if API fails)
- Comprehensive error logging

**Performance:**
- **Average Response Time:** 2-60 seconds (model-dependent)
- **Timeout:** 120 seconds (configurable)
- **Impact on Report Generation:** +20-120 seconds for AI-enhanced reports
- **Optimization:** Caching recommended for frequently requested analyses

**Security:**
- API key stored in environment variables (never in code)
- Secure HTTPS connections to NVIDIA API
- No sensitive data sent to API (only financial metrics and analysis prompts)

**Integration Points:**
- Automatic integration in report generation (`investment_bot_v2.py`)
- Optional integration in DCF calculations
- Optional integration in peer comparison
- Optional integration in translation services

**Status Checking:**
```python
from app.nvidia import is_nvidia_available, get_nvidia_status

# Check if NVIDIA API is available
if is_nvidia_available():
    # Use AI features
    
# Get detailed status
status = get_nvidia_status()
# Returns: {"available": True, "api_key_set": True, "api_ready": True}
```

### Data Flow

```
External APIs
    ↓
Data Loaders (app/dataio/)
    ↓
Data Validation (app/quality/)
    ↓
Cache Layer (Redis - optional)
    ↓
Business Logic Modules
    ↓
Report Generation
```

### Data Validation

**Location:** `app/quality/validators.py`

**Validation Checks:**
- Data completeness (percentage of available metrics)
- Data accuracy (cross-source validation)
- Data freshness (timestamp checks)
- Outlier detection (statistical validation)
- Business rule validation (e.g., P/E > 0)

---

## API Documentation

### Base URL

**Production:** `http://173.212.208.123:5001`

### Authentication

Currently, the API does not require authentication. Future versions may implement JWT-based authentication.

### Endpoints

#### 1. Health Check

```
GET /health
```

**Description:** System health check

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2025-12-XX..."
}
```

#### 2. Report Generation

```
GET /api/report/<ticker>
```

**Description:** Generate HTML report for a stock ticker

**Parameters:**
- `ticker` (path) - Stock symbol (e.g., AAPL, MSFT)
- `view` (query) - Show in browser (`true`/`false`)
- `v2` (query) - Use V2 report generator (`true`/`false`, recommended)
- `download` (query) - Download as file (`true`/`false`)
- `lang` (query) - Report language (`en`/`ru`/`de`/`es`, default: `en`)

**Example:**
```bash
curl "http://173.212.208.123:5001/api/report/AAPL?view=true&v2=true"
```

**Response:** HTML report

#### 3. Report Version

```
GET /api/report_version
```

**Description:** Get current report version

**Response:**
```json
{
  "version": "v2",
  "description": "Institutional Level Reports"
}
```

#### 4. Market Overview

```
GET /api/market_overview
```

**Description:** Get market overview with top stocks

**Response:** JSON with market data

#### 5. Comprehensive Analysis (FastAPI)

```
GET /api/v1/analysis/comprehensive/{ticker}
```

**Description:** Comprehensive analysis endpoint (FastAPI)

**Parameters:**
- `ticker` (path) - Stock symbol
- `period` (query) - Analysis period (`1y`, `2y`, `5y`, default: `1y`)

**Response:** JSON with comprehensive analysis data

### FastAPI Documentation

FastAPI provides automatic interactive documentation:

- **Swagger UI:** `http://173.212.208.123:5001/docs`
- **ReDoc:** `http://173.212.208.123:5001/redoc`

### Error Handling

**Standard Error Response:**
```json
{
  "error": "Error message",
  "status_code": 500,
  "timestamp": "2025-12-XX..."
}
```

**HTTP Status Codes:**
- `200` - Success
- `400` - Bad Request
- `404` - Not Found
- `500` - Internal Server Error
- `504` - Gateway Timeout

---

## Deployment & Infrastructure

### Production Server

**Provider:** Contabo  
**Instance Type:** Cloud VPS 60 SSD  
**IP Address:** 173.212.208.123  
**Location:** Cloud data center

### Hardware Specifications

| Resource | Specification |
|----------|---------------|
| **CPU** | 18 cores |
| **RAM** | 96 GB |
| **Disk** | 700 GB SSD |
| **Network** | High-speed connection |

### Software Stack

| Component | Technology | Configuration |
|-----------|-----------|---------------|
| **OS** | Linux (Ubuntu/Debian) | - |
| **Web Server** | Nginx | Reverse proxy, SSL/TLS |
| **WSGI Server** | Gunicorn | 4 workers, sync workers |
| **Python** | Python 3.9+ | - |
| **Process Manager** | Supervisor | Process management |

### Deployment Architecture

```
Internet
    ↓
Nginx (Reverse Proxy)
    • SSL/TLS Termination
    • Rate Limiting
    • Timeout: 600s
    ↓
Gunicorn (WSGI Server)
    • 4 workers
    • Sync worker class
    • Timeout: 600s
    • Max requests: 1000 per worker
    ↓
Flask/FastAPI Application
    • stable_server.py
    • app/api/v1/main.py
```

### Gunicorn Configuration

**Command:**
```bash
gunicorn \
  --bind 127.0.0.1:5001 \
  --workers 4 \
  --worker-class sync \
  --worker-connections 1000 \
  --timeout 600 \
  --keep-alive 5 \
  --max-requests 1000 \
  --max-requests-jitter 50 \
  --log-level info \
  --access-logfile /opt/investment-bot/logs/access.log \
  --error-logfile /opt/investment-bot/logs/error.log \
  web_dashboard:app
```

### Nginx Configuration

**Key Settings:**
- `proxy_connect_timeout`: 180s
- `proxy_send_timeout`: 600s
- `proxy_read_timeout`: 600s
- SSL/TLS enabled
- Rate limiting configured

### Deployment Process

1. **Code Deployment:**
   ```bash
   scp investment_bot_v2.py user@173.212.208.123:/opt/investment-bot/
   ```

2. **Graceful Restart:**
   ```bash
   ssh user@173.212.208.123 "sudo pkill -HUP -f 'gunicorn.*investment'"
   ```

3. **Verification:**
   ```bash
   curl http://173.212.208.123:5001/health
   ```

### Environment Configuration

**Configuration Files:**
- `.env` - Development environment variables
- `.env.production` - Production environment variables

**Key Environment Variables:**
- `NVIDIA_API_KEY` - NVIDIA AI API key
- `USE_NVIDIA_AI_REPORTS` - Enable/disable AI reports
- `REDIS_URL` - Redis connection string (optional)
- `DATABASE_URL` - PostgreSQL connection string (optional)

### Scaling Configuration

**Current Setup:**
- 4 Gunicorn workers
- ~10% CPU utilization
- ~10% memory utilization

**Recommended Scaling:**
- 8-12 workers for 2-3x capacity
- Server can easily support 16+ workers

---

## Performance & Scalability

### Current Performance Metrics

See `BENCHMARKS.md` for detailed performance metrics.

**Key Metrics:**
- **Report Generation:** 20-180 seconds (depending on complexity)
- **API Response Time:** <50ms (health checks)
- **CPU Usage:** 5-15% (18 cores available)
- **Memory Usage:** 5-15% (96 GB available)
- **Concurrent Capacity:** 4 reports (current), 12-16 (recommended)

### Scalability Characteristics

**Horizontal Scaling:**
- Stateless application design
- Can run multiple instances behind load balancer
- Database connections can be pooled

**Vertical Scaling:**
- Server has abundant resources (18 cores, 96 GB RAM)
- Can increase worker count without hardware upgrade
- Current bottleneck: NVIDIA AI API rate limits (not server resources)

### Optimization Opportunities

1. **Worker Scaling** (Immediate)
   - Increase from 4 to 8-12 workers
   - Expected: 2-3x throughput improvement

2. **Caching Strategy**
   - Redis caching for frequently accessed data
   - Cache AI-generated reports for 24-48 hours
   - Expected: 30-50% reduction in generation time

3. **Parallel Data Fetching**
   - Fetch from multiple sources in parallel
   - Expected: 20-30% reduction in data fetch time

---

## Security

### Current Security Measures

1. **Network Security**
   - Nginx as reverse proxy (not directly exposing application)
   - Firewall rules limiting access
   - SSL/TLS encryption (if configured)

2. **Application Security**
   - Input validation on API endpoints
   - Error handling (no sensitive data in error messages)
   - Rate limiting via Nginx

3. **Data Security**
   - No sensitive credentials in code
   - Environment variables for secrets
   - Secure API key storage

### Security Recommendations

1. **Authentication & Authorization**
   - Implement JWT-based authentication
   - Role-based access control (RBAC)
   - API key management

2. **Data Protection**
   - Encrypt sensitive data at rest
   - Use HTTPS for all connections
   - Implement API rate limiting per user

3. **Monitoring & Auditing**
   - Security event logging
   - Intrusion detection
   - Regular security audits

### Compliance

**Framework Support:**
- `app/security/compliance.py` - Compliance checks
- `app/security/rbac.py` - Role-based access control

**Future Enhancements:**
- GDPR compliance features
- SOC 2 compliance preparation
- Financial data compliance (if required)

---

## Monitoring & Observability

### Metrics Collection

**Implementation:** `app/monitoring/metrics.py`

**Metrics Types:**
- **Counters:** Request counts, error counts
- **Gauges:** Current values (CPU, memory, etc.)
- **Histograms:** Request durations, operation times

### System Metrics

**Collected Metrics:**
- CPU usage percentage
- Memory usage (percentage and absolute)
- Disk usage
- Load average
- Network I/O

**Collection Tool:** `psutil` library

### Application Metrics

**Collected Metrics:**
- HTTP request counts by endpoint
- Response times (p50, p95, p99)
- Error rates
- Data operation durations
- Analysis operation durations

### Prometheus Integration

**Format:** Prometheus-compatible metrics

**Endpoint:** `/metrics` (if configured)

**Metric Export:**
- System metrics (CPU, memory, disk)
- Application metrics (requests, errors, durations)
- Business metrics (report generation times)

### Health Checks

**Endpoint:** `/health`

**Checks Performed:**
- System resource availability (CPU, memory, disk)
- Application health status
- Error rate check
- Response time check

**Response Format:**
```json
{
  "status": "healthy",
  "timestamp": "2025-12-XX...",
  "checks": {
    "cpu": {"status": "healthy", "value": 10.5},
    "memory": {"status": "healthy", "value": 15.2},
    "disk": {"status": "healthy", "value": 18.5},
    "error_rate": {"status": "healthy", "value": 0.015}
  }
}
```

### Logging

**Implementation:** `app/monitoring/logging.py`

**Log Levels:**
- DEBUG - Detailed information
- INFO - General information
- WARNING - Warning messages
- ERROR - Error messages
- CRITICAL - Critical errors

**Log Formats:**
- Structured logging (JSON format)
- Human-readable format for development

**Log Files:**
- `server.log` - Application logs
- `access.log` - HTTP access logs (Gunicorn)
- `error.log` - Error logs (Gunicorn)

---

## Development & Testing

### Development Environment Setup

1. **Clone Repository:**
   ```bash
   git clone <repository-url>
   cd investment-bot-project
   ```

2. **Create Virtual Environment:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure Environment:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. **Run Development Server:**
   ```bash
   python stable_server.py
   ```

### Testing

**Test Framework:** pytest

**Running Tests:**
```bash
pytest tests/
pytest tests/ -v  # Verbose output
pytest tests/ --cov  # With coverage
```

**Test Structure:**
```
tests/
├── unit/          # Unit tests
├── integration/   # Integration tests
└── e2e/          # End-to-end tests
```

### Code Quality

**Tools:**
- **black** - Code formatting
- **flake8** - Linting
- **mypy** - Type checking
- **isort** - Import sorting

**Running Code Quality Checks:**
```bash
black .              # Format code
flake8 .            # Lint code
mypy app/           # Type check
isort .             # Sort imports
```

### Development Workflow

1. **Feature Development:**
   - Create feature branch
   - Implement feature
   - Write tests
   - Run code quality checks
   - Submit pull request

2. **Testing:**
   - Run unit tests
   - Run integration tests
   - Manual testing in development environment

3. **Deployment:**
   - Merge to main branch
   - Deploy to production server
   - Verify deployment
   - Monitor for issues

---

## Configuration & Environment

### Configuration Files

**Main Configuration:**
- `config.py` - Application configuration
- `.env` - Environment variables (development)
- `.env.production` - Environment variables (production)

### Key Configuration Options

**NVIDIA AI:**
- `NVIDIA_NIM_API_KEY` - API key for NVIDIA NIM services (single key for all models)
- `NVIDIA_NIM_BASE_URL` - Base URL for NVIDIA API (default: https://integrate.api.nvidia.com/v1)
- `USE_NVIDIA_AI_REPORTS` - Enable/disable AI report generation (default: false)
- `USE_NVIDIA_SIGNALS` - Enable/disable AI signal generation (default: false)
- `USE_NVIDIA_OCR` - Enable/disable OCR processing (default: false)
- `USE_NVIDIA_RAG` - Enable/disable RAG system (default: false)
- `NVIDIA_TIMEOUT_SECONDS` - Timeout for AI API calls (default: 120s)
- `NVIDIA_MAX_RETRIES` - Maximum retry attempts (default: 2)
- `NVIDIA_FALLBACK_TO_TEMPLATES` - Enable fallback to templates (default: true)
- `NVIDIA_LLM_MODEL` - Primary LLM model (default: meta/llama-3.1-70b-instruct)
- `NVIDIA_REASONING_MODEL` - Reasoning model (default: nvidia/nemotron-3-nano-30b-a3b)
- `NVIDIA_OCR_MODEL` - OCR model (default: nvidia/nemoretriever-ocr-v1)
- `NVIDIA_EMBED_MODEL` - Embedding model (default: nvidia/nv-embedqa-e5-v5)

**Data Sources:**
- `YAHOO_FINANCE_CACHE_TTL` - Cache TTL for Yahoo Finance data
- `SEC_EDGAR_CACHE_DIR` - Cache directory for SEC filings

**Server:**
- `WORKERS` - Number of Gunicorn workers
- `TIMEOUT` - Request timeout in seconds
- `LOG_LEVEL` - Logging level (DEBUG, INFO, WARNING, ERROR)

**Database (Optional):**
- `DATABASE_URL` - PostgreSQL connection string
- `REDIS_URL` - Redis connection string

### Feature Flags

**Location:** Environment variables or configuration files

**Available Flags:**
- `USE_NVIDIA_AI_REPORTS` - Enable AI report generation
- `USE_NVIDIA_SIGNALS` - Enable AI signal generation
- `USE_NVIDIA_OCR` - Enable OCR processing
- `USE_NVIDIA_RAG` - Enable RAG system
- `USE_CACHE` - Enable Redis caching
- `USE_DATABASE` - Enable PostgreSQL database

---

## Conclusion

The Investment Bot is a production-ready, institutional-grade stock analysis platform with comprehensive capabilities for automated report generation, multi-factor analysis, and AI-powered insights. The system is built on modern Python frameworks with a modular, scalable architecture that supports horizontal and vertical scaling.

### Key Strengths

- ✅ Production-ready with proven stability
- ✅ Comprehensive analytics (valuation, risk, ESG)
- ✅ AI integration for enhanced insights
- ✅ Scalable architecture (abundant server resources)
- ✅ Multi-language support
- ✅ Extensive monitoring and observability

### Future Enhancements

- Enhanced caching strategy for performance
- Authentication and authorization system
- Advanced security features
- Additional data source integrations
- Real-time data streaming
- Advanced ML models for prediction

---

**Document Version:** 1.0  
**Last Updated:** December 2025  
**Maintained By:** Investment Bot Development Team  
**Contact:** See project README for support information

# Platform 4: Signal Analysis  
**Version:** 1.6.2+  
**Last Updated:** December 2025  
**Production Domain:** news.saa-alliance.com

---

## Document Information

| Field | Value |
|-------|-------|
| **Document Type** | Technical Dossier |
| **System Name** | Signal Analysis (News Analytics AI) |
| **Version** | 1.6.2+ |
| **Status** | Production |
| **Maintainer** | Scientific Analytics Alliance |
| **Language** | English |

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [System Overview](#system-overview)
3. [Architecture](#architecture)
4. [Technology Stack](#technology-stack)
5. [Database Schema](#database-schema)
6. [API Documentation](#api-documentation)
7. [Deployment](#deployment)
8. [Infrastructure](#infrastructure)
9. [Security](#security)
10. [Performance](#performance)
11. [Monitoring & Logging](#monitoring--logging)
12. [Development Setup](#development-setup)
13. [Testing](#testing)
14. [Troubleshooting](#troubleshooting)
15. [Appendices](#appendices)

---

## Executive Summary

### System Description

**Signal Analysis** is a professional financial news analytics platform that automatically collects, analyzes, and visualizes financial news from multiple RSS feeds. The system uses AI-powered analysis (NVIDIA DeepSeek R1 Reasoning Model) to extract market signals, determine impact scores, and provide Bloomberg Terminal-style visualization.

### Key Capabilities

- **Automated News Collection** - Monitors 20+ RSS feeds hourly
- **AI-Powered Analysis** - Advanced reasoning for market impact assessment
- **Multi-Sector Coverage** - 9 active sectors (CRYPTO, TECH, BIOTECH, etc.)
- **Bilingual Support** - Full English and Russian localization
- **Real-time Dashboard** - Interactive Bloomberg-style interface
- **Impact Graph Visualization** - Network graphs showing entity relationships
- **Export Capabilities** - CSV and PDF export formats
- **Telegram Integration** - Automated digest publication

### Technical Highlights

- **High Performance** - Sub-200ms API responses, sub-1s page loads
- **Scalable Architecture** - Handles 10-20x current load
- **Robust Infrastructure** - 18 CPU cores, 96 GB RAM server
- **Production Ready** - 99.9% uptime, comprehensive error handling
- **Modern Stack** - Python 3.10+, FastAPI, Go, SQLite, NVIDIA API

---

## System Overview

### System Purpose

The platform aggregates financial news from multiple sources, analyzes them using advanced AI models, and presents actionable market intelligence through a professional web interface. It serves traders, analysts, and financial professionals who need real-time insights into market-moving events.

### Core Workflows

1. **News Ingestion** → Collect articles from RSS feeds every hour
2. **AI Analysis** → Process articles through NVIDIA DeepSeek R1 model
3. **Data Storage** → Store analyzed signals in SQLite database
4. **Visualization** → Display signals through web dashboard
5. **Alerting** → Send high-impact signals to Telegram channel

### System Boundaries

**Inputs:**
- RSS feeds (20+ sources)
- NVIDIA API (AI analysis)
- User queries (dashboard filters)

**Outputs:**
- Web dashboard (news.saa-alliance.com)
- Telegram digests
- CSV/PDF exports
- REST API responses

**External Dependencies:**
- NVIDIA API (DeepSeek R1)
- RSS feed providers
- Telegram Bot API
- Domain DNS (saa-alliance.com)

---

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    EXTERNAL DATA SOURCES                        │
├─────────────────────────────────────────────────────────────────┤
│  📰 RSS Feeds (20+)           🤖 AI Services                    │
│  ├─ CryptoNews                 ├─ NVIDIA API (DeepSeek R1)     │
│  ├─ SEC.gov                    └─ Telegram Bot API             │
│  ├─ FDA.gov                                                    │
│  ├─ Bloomberg                                                  │
│  └─ ...                                                        │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│              PYTHON BACKEND (FastAPI) - Port 18080             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────────────────────────────────┐     │
│  │  1. Ingestion Layer                                  │     │
│  │     • APScheduler (hourly triggers)                  │     │
│  │     • RSS Parser (feedparser)                        │     │
│  │     • Content Extraction (BeautifulSoup)             │     │
│  │     • Deduplication (SHA-256 hashing)                │     │
│  └──────────────────────────────────────────────────────┘     │
│                            ↓                                    │
│  ┌──────────────────────────────────────────────────────┐     │
│  │  2. Analysis Layer                                   │     │
│  │     • Orphan Detection                               │     │
│  │     • Batch Processing                               │     │
│  │     • LLM Integration (NVIDIA API)                   │     │
│  │     • Semaphore Control (max 2 parallel calls)       │     │
│  │     • Retry Logic (exponential backoff)              │     │
│  │     • Response Parsing & Validation                  │     │
│  └──────────────────────────────────────────────────────┘     │
│                            ↓                                    │
│  ┌──────────────────────────────────────────────────────┐     │
│  │  3. Storage Layer                                    │     │
│  │     • SQLite Database (WAL mode)                     │     │
│  │     • Transaction Management                         │     │
│  │     • Index Optimization                             │     │
│  └──────────────────────────────────────────────────────┘     │
│                            ↓                                    │
│  ┌──────────────────────────────────────────────────────┐     │
│  │  4. API Layer                                        │     │
│  │     • REST Endpoints                                 │     │
│  │     • WebSocket Support                              │     │
│  │     • Export Engine (CSV/PDF)                        │     │
│  │     • Impact Graph Service                           │     │
│  └──────────────────────────────────────────────────────┘     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│                    DATABASE (SQLite)                            │
│                      signals.db                                 │
├─────────────────────────────────────────────────────────────────┤
│  • signals (main table)                                         │
│  • entities (entity registry)                                   │
│  • entity_relationships (graph relationships)                   │
│  • news_impact (impact graph data)                              │
│  • ingested (temporary staging table)                           │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│                    NGINX REVERSE PROXY                          │
├─────────────────────────────────────────────────────────────────┤
│  • SSL/TLS Termination (Let's Encrypt)                          │
│  • Static File Serving                                          │
│  • Load Balancing (if multiple workers)                         │
│  • Rate Limiting                                                │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│                      WEB BROWSER                                │
├─────────────────────────────────────────────────────────────────┤
│  • Bloomberg-style Dashboard                                    │
│  • Impact Graph Visualization                                   │
│  • Real-time Statistics                                         │
│  • Multi-language Support (EN/RU)                               │
└─────────────────────────────────────────────────────────────────┘
```

### Component Architecture

#### 1. Python Backend Service

**Purpose:** Core application logic, news ingestion, AI analysis, API endpoints

**Technology:** Python 3.10+, FastAPI, Uvicorn

**Key Responsibilities:**
- RSS feed polling and parsing
- AI-powered content analysis
- Database operations
- REST API endpoints
- WebSocket connections
- Export generation (CSV/PDF)
- Telegram integration

**Port:** 18080

**Process Management:** systemd service (`signal-analysis-api.service`)

#### 2. Go Dashboard Service (Optional)

**Purpose:** High-performance web dashboard

**Technology:** Go 1.21+, Gin framework

**Key Responsibilities:**
- Fast HTML rendering
- Server-side template processing
- Static file serving
- Real-time statistics

**Port:** 8090 (if enabled)

**Note:** Currently using Python backend for dashboard rendering

#### 3. Database Layer

**Technology:** SQLite 3 with WAL mode

**Optimization:**
- Write-Ahead Logging (WAL) for concurrent access
- Indexed queries for fast lookups
- Connection pooling
- 64MB cache size

#### 4. Frontend Layer

**Technology:** HTML5, CSS3, Vanilla JavaScript, React components (optional)

**Key Features:**
- Bloomberg Terminal-style UI
- Responsive design
- Real-time polling (30s interval)
- Interactive impact graphs (Cytoscape.js)
- Multi-language support (i18n)

### Data Flow

#### Ingestion Flow

```
RSS Feed → feedparser → httpx → BeautifulSoup → SHA-256 Hash
                                                        ↓
                                           [Duplicate Check]
                                                        ↓
                                           [Save to ingested]
```

#### Analysis Flow

```
ingested table → [Find orphans] → Batch Formation
                                          ↓
                                   [async with semaphore(2)]
                                          ↓
                                  [NVIDIA API Call]
                                          ↓
                                  [Response Parsing]
                                          ↓
                          {
                            sector: "CRYPTO",
                            tickers: ["BTC"],
                            impact: 85,
                            sentiment: 75,
                            confidence: 90,
                            deep_analysis_en: "...",
                            deep_analysis_ru: "..."
                          }
                                          ↓
                              [Save to signals table]
```

#### Request Flow

```
Browser Request → Nginx → FastAPI Router
                                  ↓
                         [Query Parsing]
                                  ↓
                         [SQLite SELECT]
                                  ↓
                         [JSON Serialization]
                                  ↓
                         [HTTP Response]
                                  ↓
                         Browser Rendering
```

---

## Technology Stack

### Backend Technologies

#### Core Framework

| Component | Version | Purpose |
|-----------|---------|---------|
| **Python** | 3.10+ | Primary programming language |
| **FastAPI** | 0.104.1 | Modern web framework |
| **Uvicorn** | 0.24.0 | ASGI server |
| **Pydantic** | 2.5.0 | Data validation |
| **Pydantic Settings** | 2.1.0 | Configuration management |

#### Data Processing

| Component | Version | Purpose |
|-----------|---------|---------|
| **httpx** | 0.25.0 | Async HTTP client |
| **feedparser** | 6.0.10 | RSS/Atom feed parsing |
| **BeautifulSoup4** | 4.12.2 | HTML parsing |
| **lxml** | 4.9.3 | XML/HTML parser backend |

#### Database

| Component | Version | Purpose |
|-----------|---------|---------|
| **SQLite** | 3.x | Relational database |
| **aiosqlite** | 0.19.0 | Async SQLite driver |

#### Scheduling & Background Tasks

| Component | Version | Purpose |
|-----------|---------|---------|
| **APScheduler** | 3.10.4 | Job scheduling |
| **asyncio** | Built-in | Async concurrency |

#### AI/ML Integration

| Component | Version | Purpose |
|-----------|---------|---------|
| **NVIDIA API** | Latest | DeepSeek R1 Reasoning Model |
| **OpenAI** | 1.12.0 | GPT-4 (optional fallback) |
| **numpy** | 1.24.3 | Numerical operations |

#### Utilities

| Component | Version | Purpose |
|-----------|---------|---------|
| **tenacity** | 8.2.3 | Retry logic |
| **python-dotenv** | 1.0.0 | Environment variables |
| **reportlab** | 4.0.7 | PDF generation |
| **Pillow** | 10.1.0 | Image processing |

### Frontend Technologies

#### Core

| Component | Version | Purpose |
|-----------|---------|---------|
| **HTML5** | - | Markup |
| **CSS3** | - | Styling (Bloomberg Terminal theme) |
| **JavaScript** | ES6+ | Client-side logic |
| **TypeScript** | 5.0+ | Type-safe development (optional) |

#### Libraries (Optional/React Components)

| Component | Version | Purpose |
|-----------|---------|---------|
| **React** | 18.0.0 | Component framework |
| **Cytoscape.js** | 3.33.1 | Graph visualization |
| **i18next** | 23.7.0 | Internationalization |
| **Chart.js** | - | Timeline charts |

### Infrastructure Technologies

| Component | Version | Purpose |
|-----------|---------|---------|
| **Nginx** | Latest | Reverse proxy, SSL termination |
| **Let's Encrypt** | - | SSL certificates |
| **Systemd** | - | Process management |
| **Ubuntu** | 24.04 | Operating system |

### External Services

| Service | Purpose |
|---------|---------|
| **NVIDIA API** | AI analysis (DeepSeek R1) |
| **Telegram Bot API** | Automated alerts |
| **RSS Feed Providers** | News sources |

---

## NVIDIA API Integration

### Overview

The Signal Analysis platform uses **NVIDIA API** as the primary AI provider for news analysis, entity recognition, and content extraction. NVIDIA API provides cloud-based LLM inference with no local GPU required, offering access to advanced reasoning models like DeepSeek R1.

**API Base URL:** `https://integrate.api.nvidia.com/v1`  
**Documentation:** https://build.nvidia.com/

### Primary Models

#### 1. DeepSeek R1 Reasoning Model

**Model ID:** `deepseek-ai/deepseek-r1`  
**Usage:** Primary model for news analysis and market impact assessment

**Features:**
- Advanced reasoning capabilities (chain-of-thought)
- High-quality market analysis
- Multilingual support (English/Russian)
- Reasoning extraction for transparency

**Configuration:**
```python
NVIDIA_API_URL = "https://integrate.api.nvidia.com/v1/chat/completions"
NVIDIA_MODEL = "deepseek-ai/deepseek-r1"
```

**Request Format:**
```python
{
    "model": "deepseek-ai/deepseek-r1",
    "messages": [
        {"role": "system", "content": "Return only JSON."},
        {"role": "user", "content": "<prompt>"}
    ],
    "temperature": 0.6,
    "top_p": 0.7,
    "max_tokens": 4096,
    "stream": False
}
```

**Response Structure:**
```json
{
    "choices": [{
        "message": {
            "content": "<analysis_json>",
            "reasoning_content": "<chain_of_thought>"
        }
    }]
}
```

#### 2. DeepSeek v3.1 Terminus (Alternative)

**Model ID:** `deepseek-ai/deepseek-v3.1-terminus`  
**Usage:** Alternative model for analysis, OCR, and entity extraction

**Configuration:**
```bash
NVIDIA_MODEL=deepseek-ai/deepseek-v3.1-terminus
```

### Additional NVIDIA Services

#### 1. Nemotron Retriever (Embeddings)

**Model ID:** `nvidia/llama-3_2-nemoretriever-300m-embed-v2`  
**Usage:** Semantic search and similarity matching

**Implementation:** `nvidia_retriever.py`

**Features:**
- Text embeddings generation
- Cosine similarity calculation
- Batch processing support
- Entity matching via semantic search

**Example Usage:**
```python
from nvidia_retriever import get_nemotron_retriever

retriever = get_nemotron_retriever()
embedding = await retriever.get_embedding("Bitcoin price analysis")
similar = await retriever.find_similar(query_text, candidates, threshold=0.85)
```

#### 2. NVIDIA OCR

**Model ID:** Vision model via chat completions  
**Usage:** Text extraction from images

**Implementation:** `nvidia_ocr.py`

**Features:**
- Image URL processing
- Text extraction from images
- Base64 image support
- Automatic image content analysis

**Example Usage:**
```python
from nvidia_ocr import get_nvidia_ocr

ocr = get_nvidia_ocr()
text = await ocr.extract_text_from_image_url(image_url)
```

#### 3. Nemotron NER (Named Entity Recognition)

**Model ID:** `deepseek-ai/deepseek-v3.1-terminus`  
**Usage:** Automatic entity extraction from news text

**Implementation:** `nemotron_ner.py`

**Features:**
- Company extraction
- Protocol/asset identification
- Person name recognition
- Symbol mapping (stock tickers, crypto symbols)
- Automatic database insertion

**Entity Types:**
- `company` - Companies and organizations
- `protocol` - Blockchain protocols and cryptocurrencies
- `person` - People and executives

**Example Output:**
```json
{
    "entities": [
        {"name": "Bitcoin", "type": "protocol", "symbol": "BTC"},
        {"name": "Apple Inc.", "type": "company", "symbol": "AAPL"},
        {"name": "Tim Cook", "type": "person", "symbol": ""}
    ]
}
```

### API Authentication

**Method:** Bearer Token Authentication

**Environment Variable:**
```bash
NVIDIA_API_KEY=nvapi-xxxxx...
```

**Request Headers:**
```python
headers = {
    "Authorization": f"Bearer {NVIDIA_API_KEY}",
    "Content-Type": "application/json"
}
```

### API Usage Flow

#### 1. News Analysis Workflow

```
1. RSS Feed Article → Ingested
2. Find Orphan Articles (unprocessed)
3. Call NVIDIA API (DeepSeek R1):
   - Extract sector, tickers, entities
   - Calculate impact (0-100)
   - Determine sentiment (-1 to +1)
   - Generate confidence score
   - Provide reasoning chain
4. Store Results → Signals Table
```

#### 2. Request Implementation

**Location:** `app.py` → `call_deepseek()` function

**Key Features:**
- Semaphore control (max 2 parallel calls)
- Retry logic with exponential backoff
- Timeout handling (60 seconds)
- Reasoning extraction
- Error handling and fallback

**Code Snippet:**
```python
async def call_deepseek(text: str) -> LLMResult:
    async with semaphore:  # Limit concurrent calls
        nvidia_key = os.getenv('NVIDIA_API_KEY', '')
        if not nvidia_key:
            return LLMResult(...)  # Fallback
        
        headers = {"Authorization": f"Bearer {nvidia_key}"}
        payload = {
            "model": NVIDIA_MODEL,
            "messages": [...],
            "max_tokens": 4096
        }
        
        async with httpx.AsyncClient(timeout=60) as client:
            response = await client.post(NVIDIA_API_URL, headers=headers, json=payload)
            # Extract reasoning_content and content
```

### Configuration

#### Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `NVIDIA_API_KEY` | Yes | - | NVIDIA API key (starts with `nvapi-`) |
| `NVIDIA_MODEL` | No | `deepseek-ai/deepseek-r1` | Model identifier |
| `NEMOTRON_NER_ENABLED` | No | `true` | Enable/disable NER service |
| `DISABLE_AI_ANALYSIS` | No | `false` | Disable AI for local development |

#### Getting API Key

1. Visit: https://build.nvidia.com/
2. Sign up / Sign in
3. Navigate to Profile → API Keys
4. Generate new API key
5. Activate $5 free credits (if available)
6. Add to `.env` file: `NVIDIA_API_KEY=nvapi-xxxxx`

### Rate Limits & Pricing

#### Rate Limits

- **Default:** Per API key limits (check NVIDIA dashboard)
- **Concurrency:** Limited by semaphore (max 2 parallel calls)
- **Timeout:** 60 seconds per request
- **Retry:** 3 attempts with exponential backoff

#### Pricing (Approximate)

| Model | Cost per 1K Requests | Monthly Estimate* |
|-------|---------------------|-------------------|
| DeepSeek R1 | ~$0.005 | ~$15 |
| DeepSeek v3.1 | ~$0.005 | ~$15 |
| Nemotron Retriever | Varies | ~$5 |
| OCR | Varies | ~$5 |

*Based on ~100 news articles per day

**Note:** Free $5 credits available for new accounts

### Performance Metrics

| Operation | Average Time | Notes |
|-----------|--------------|-------|
| **Full Analysis** | 30-60s | DeepSeek R1 with reasoning |
| **Entity Extraction** | 5-10s | NER service |
| **OCR Processing** | 1-3s | Image text extraction |
| **Embedding Generation** | 0.5-1s | Per text |
| **API Response** | 5-15s | Typical LLM response time |

### Error Handling

#### Common Errors

1. **403 Forbidden**
   - **Cause:** Invalid or expired API key
   - **Solution:** Regenerate API key, check activation status

2. **429 Rate Limit**
   - **Cause:** Too many requests
   - **Solution:** Implement backoff, reduce concurrency

3. **Timeout (>60s)**
   - **Cause:** Model processing taking too long
   - **Solution:** Increase timeout, use faster model

4. **500 Internal Server Error**
   - **Cause:** NVIDIA API issue
   - **Solution:** Retry with exponential backoff

#### Error Logging

All NVIDIA API errors are logged with:
- Request details (model, endpoint)
- Response status codes
- Error messages
- Timing information

**Log Format:**
```
[ERROR] NVIDIA API request failed after 45.2s: HTTP 500
[INFO] Calling NVIDIA API (DeepSeek R1) for risk analysis...
[INFO] API Response received: 12.5s
```

### Response Headers

The system adds custom headers to responses indicating NVIDIA API usage:

```http
X-NVIDIA-API-Used: true
X-NVIDIA-Model: deepseek-ai/deepseek-r1
X-NVIDIA-Response-Time: 12.45s
X-NVIDIA-API-URL: https://integrate.api.nvidia.com/v1/chat/completions
```

### Integration Points

1. **Main Analysis** (`app.py`)
   - Function: `call_deepseek()`
   - Used for: News analysis, impact calculation
   - Model: DeepSeek R1

2. **Entity Recognition** (`nemotron_ner.py`)
   - Function: `extract_entities()`
   - Used for: Automatic entity extraction
   - Model: DeepSeek v3.1

3. **Image OCR** (`nvidia_ocr.py`)
   - Function: `extract_text_from_image_url()`
   - Used for: Image text extraction
   - Model: Vision model

4. **Semantic Search** (`nvidia_retriever.py`)
   - Function: `find_similar()`
   - Used for: Similarity matching
   - Model: Nemotron Retriever

### Testing & Verification

#### Test API Connection

```python
import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    base_url="https://integrate.api.nvidia.com/v1",
    api_key=os.getenv("NVIDIA_API_KEY")
)

response = client.chat.completions.create(
    model="deepseek-ai/deepseek-r1",
    messages=[{"role": "user", "content": "Test"}],
    max_tokens=10
)

print(f"✅ NVIDIA API works! Response: {response.choices[0].message.content}")
```

#### Check API Usage

- **Dashboard:** https://build.nvidia.com/explore/discover
- **Usage Stats:** Profile → Usage
- **API Keys:** Profile → API Keys

### Best Practices

1. **API Key Security**
   - Store in `.env` file (not in code)
   - Never commit to version control
   - Rotate keys periodically

2. **Error Handling**
   - Always implement retry logic
   - Log all API interactions
   - Handle timeouts gracefully

3. **Performance Optimization**
   - Use semaphore to limit concurrency
   - Batch requests when possible
   - Cache results when appropriate

4. **Cost Management**
   - Monitor usage in NVIDIA dashboard
   - Use appropriate models for tasks
   - Implement request caching

### Troubleshooting

#### Issue: API Key Not Working

**Symptoms:** 403 Forbidden errors

**Solutions:**
1. Verify API key in `.env` file
2. Check key activation status
3. Verify credits available
4. Regenerate key if expired

#### Issue: Slow Response Times

**Symptoms:** Requests taking >60 seconds

**Solutions:**
1. Check NVIDIA API status
2. Try alternative model (v3.1 instead of R1)
3. Reduce `max_tokens` parameter
4. Increase timeout if needed

#### Issue: Rate Limiting

**Symptoms:** 429 Too Many Requests

**Solutions:**
1. Reduce semaphore limit (max 1 parallel call)
2. Implement exponential backoff
3. Check API key tier limits
4. Upgrade API key if needed

### Related Files

- `app.py` - Main API integration
- `nvidia_retriever.py` - Embeddings service
- `nvidia_ocr.py` - OCR service
- `nemotron_ner.py` - Entity recognition
- `.env` - API key configuration
- `test_nvidia_api.py` - API testing script

### Additional Resources

- **NVIDIA API Documentation:** https://build.nvidia.com/
- **Model Catalog:** https://build.nvidia.com/explore/discover
- **API Reference:** https://integrate.api.nvidia.com/docs
- **Community Support:** NVIDIA Developer Forums

---

## Database Schema

### Main Tables

#### 1. `signals` Table

Primary table storing analyzed news articles and market signals.

```sql
CREATE TABLE signals (
    -- Identification
    id TEXT PRIMARY KEY,                    -- UUID
    url_hash TEXT UNIQUE,                   -- SHA-256 hash of URL
    body_hash TEXT,                         -- SHA-256 hash of content
    
    -- Timestamps
    ts_published TEXT,                      -- ISO 8601 publication date
    ts_ingested TEXT,                       -- ISO 8601 ingestion date
    
    -- Source Information
    source_domain TEXT,                     -- Domain name (e.g., "example.com")
    url TEXT,                               -- Full article URL
    
    -- Content
    title TEXT,                             -- English title (original)
    title_ru TEXT,                          -- Russian title (translated)
    title_clean TEXT,                       -- Cleaned title
    summary TEXT,                           -- English summary
    summary_ru TEXT,                        -- Russian summary
    analysis TEXT,                          -- Analysis text
    deep_analysis_en TEXT,                  -- Full English analysis
    deep_analysis_ru TEXT,                  -- Full Russian analysis
    
    -- Classification
    sector TEXT,                            -- Sector code (CRYPTO, TECH, etc.)
    label TEXT,                             -- Category label
    region TEXT,                            -- Geographic region (GLOBAL, USA, etc.)
    
    -- Entities (stored as JSON arrays)
    entities_json TEXT,                     -- ["Entity1", "Entity2"]
    tickers_json TEXT,                      -- ["BTC", "TSLA"]
    
    -- Metrics (0-100 scale)
    impact INTEGER,                         -- Market impact score
    confidence INTEGER,                     -- Analysis confidence
    sentiment INTEGER,                      -- Sentiment (0=negative, 100=positive)
    trust_score REAL DEFAULT 0.7,           -- Source trustworthiness
    
    -- Metadata
    is_test BOOLEAN DEFAULT FALSE,
    merged_of TEXT,                         -- Merged records reference
    providers TEXT,                         -- AI providers used (e.g., "nvidia")
    latency TEXT DEFAULT 'fast',            -- Processing speed (fast/medium/slow)
    raw JSON                                -- Raw response data
);
```

**Indexes:**

```sql
CREATE INDEX idx_sector ON signals(sector);
CREATE INDEX idx_region ON signals(region);
CREATE INDEX idx_impact ON signals(impact);
CREATE INDEX idx_ts_published ON signals(ts_published);
CREATE INDEX idx_url_hash ON signals(url_hash);
CREATE INDEX idx_confidence ON signals(confidence);
```

#### 2. `entities` Table

Registry of financial entities (companies, cryptocurrencies, regulators).

```sql
CREATE TABLE entities (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    type TEXT,                              -- COMPANY, CRYPTO, REGULATOR, etc.
    symbol TEXT,                            -- Stock ticker or crypto symbol
    sector TEXT,                            -- Sector classification
    description TEXT,                       -- Entity description
    created_at TEXT                         -- ISO 8601 timestamp
);

CREATE INDEX idx_entity_name ON entities(name);
CREATE INDEX idx_entity_symbol ON entities(symbol);
CREATE INDEX idx_entity_sector ON entities(sector);
```

#### 3. `entity_relationships` Table

Relationships between entities (for graph visualization).

```sql
CREATE TABLE entity_relationships (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    source_entity_id INTEGER,
    target_entity_id INTEGER,
    relationship_type TEXT,                 -- PARTNERSHIP, COMPETITOR, etc.
    strength REAL DEFAULT 0.5,              -- Relationship strength (0-1)
    created_at TEXT,
    FOREIGN KEY (source_entity_id) REFERENCES entities(id),
    FOREIGN KEY (target_entity_id) REFERENCES entities(id)
);
```

#### 4. `news_impact` Table

Impact graph data linking news articles to entities.

```sql
CREATE TABLE news_impact (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    article_id TEXT,                        -- Reference to signals.id
    entity_id INTEGER,                      -- Reference to entities.id
    impact_strength REAL,                   -- Impact strength (0-1)
    impact_type TEXT,                       -- POSITIVE, NEGATIVE, NEUTRAL
    created_at TEXT,
    FOREIGN KEY (article_id) REFERENCES signals(id),
    FOREIGN KEY (entity_id) REFERENCES entities(id)
);

CREATE INDEX idx_news_impact_article ON news_impact(article_id);
CREATE INDEX idx_news_impact_entity ON news_impact(entity_id);
```

#### 5. `ingested` Table

Temporary staging table for unprocessed news items.

```sql
CREATE TABLE ingested (
    id TEXT PRIMARY KEY,
    ts_utc TEXT,
    sector TEXT,
    title TEXT,
    link TEXT,
    source TEXT,
    summary TEXT,
    content TEXT
);
```

### Database Configuration

**SQLite Pragmas:**

```python
PRAGMA journal_mode = WAL;           -- Write-Ahead Logging
PRAGMA synchronous = NORMAL;         -- Balance speed/safety
PRAGMA busy_timeout = 60000;         -- 60 second timeout
PRAGMA cache_size = -64000;          -- 64MB cache
PRAGMA foreign_keys = OFF;           -- Disabled for performance
PRAGMA temp_store = MEMORY;          -- Use memory for temp tables
```

### Database Statistics

| Metric | Value |
|--------|-------|
| **Total Entities** | 8,073 |
| **Total Signals** | ~1,000 (last 3 days) |
| **Database Size** | ~50 MB |
| **Relationships** | 106 |
| **Sectors Covered** | 9 active |

---

## API Documentation

### Base URL

**Production:** `https://news.saa-alliance.com`  
**Local Development:** `http://localhost:18080`

### Authentication

Currently no authentication required. API keys are used for external services (NVIDIA, Telegram) but not for API access.

### Endpoints

#### 1. List Signals

```http
GET /signals
```

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sector` | string | No | Filter by sector (CRYPTO, TECH, etc.) |
| `region` | string | No | Filter by region (GLOBAL, USA, etc.) |
| `min_impact` | integer | No | Minimum impact score (0-100) |
| `max_impact` | integer | No | Maximum impact score (0-100) |
| `min_confidence` | integer | No | Minimum confidence (0-100) |
| `sentiment` | integer | No | Sentiment filter (0-100) |
| `limit` | integer | No | Limit results (default: 100) |
| `offset` | integer | No | Pagination offset |
| `sort` | string | No | Sort field (default: ts_published) |
| `order` | string | No | Sort order (asc/desc, default: desc) |

**Response:**

```json
{
  "signals": [
    {
      "id": "uuid",
      "title": "Article Title",
      "title_ru": "Название статьи",
      "sector": "CRYPTO",
      "impact": 85,
      "confidence": 90,
      "sentiment": 75,
      "ts_published": "2025-12-07T10:00:00Z",
      "url": "https://example.com/article",
      "tickers_json": ["BTC", "ETH"]
    }
  ],
  "total": 100,
  "limit": 100,
  "offset": 0
}
```

#### 2. Get Signal Details

```http
GET /signals/{id}
```

**Response:**

```json
{
  "id": "uuid",
  "title": "Article Title",
  "title_ru": "Название статьи",
  "summary": "Article summary",
  "summary_ru": "Краткое содержание",
  "deep_analysis_en": "Full analysis...",
  "deep_analysis_ru": "Полный анализ...",
  "sector": "CRYPTO",
  "impact": 85,
  "confidence": 90,
  "sentiment": 75,
  "entities_json": ["Bitcoin", "Ethereum"],
  "tickers_json": ["BTC", "ETH"],
  "ts_published": "2025-12-07T10:00:00Z",
  "url": "https://example.com/article"
}
```

#### 3. Health Check

```http
GET /health
```

**Response:**

```json
{
  "status": "healthy",
  "version": "1.6.2",
  "database": "connected",
  "uptime": 86400,
  "timestamp": "2025-12-07T12:00:00Z"
}
```

#### 4. Trigger News Ingestion

```http
POST /ingest-run
```

**Response:**

```json
{
  "status": "started",
  "message": "Ingestion process started"
}
```

#### 5. Export Signals

```http
GET /export/signals.csv
GET /export/signals.pdf
```

**Response:** CSV or PDF file download

#### 6. Get Impact Graph

```http
GET /api/impact-graph/{article_id}
```

**Response:**

```json
{
  "nodes": [
    {
      "id": "entity1",
      "label": "Bitcoin",
      "type": "CRYPTO",
      "sector": "CRYPTO"
    }
  ],
  "edges": [
    {
      "source": "entity1",
      "target": "entity2",
      "strength": 0.8
    }
  ]
}
```

#### 7. List Entities

```http
GET /api/entities
```

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sector` | string | No | Filter by sector |
| `type` | string | No | Filter by type |
| `search` | string | No | Search by name |

**Response:**

```json
{
  "entities": [
    {
      "id": 1,
      "name": "Bitcoin",
      "type": "CRYPTO",
      "symbol": "BTC",
      "sector": "CRYPTO"
    }
  ],
  "total": 8073
}
```

### WebSocket Endpoints

#### Real-time Updates

```http
WS /ws
```

Sends updates when new signals are processed.

**Message Format:**

```json
{
  "type": "new_signal",
  "signal": {
    "id": "uuid",
    "title": "Article Title",
    "sector": "CRYPTO",
    "impact": 85
  }
}
```

### Error Responses

**400 Bad Request:**

```json
{
  "error": "Invalid parameter",
  "detail": "Parameter 'sector' must be one of: CRYPTO, TECH, ..."
}
```

**404 Not Found:**

```json
{
  "error": "Not found",
  "detail": "Signal with id 'xxx' not found"
}
```

**500 Internal Server Error:**

```json
{
  "error": "Internal server error",
  "detail": "Database connection failed"
}
```

---

## Deployment

### Production Server

| Property | Value |
|----------|-------|
| **Provider** | Contabo |
| **IP Address** | 173.212.208.123 |
| **Model** | Cloud VPS 60 SSD |
| **CPU** | 18 cores |
| **RAM** | 96 GB |
| **Storage** | 700 GB SSD |
| **OS** | Ubuntu 24.04 |
| **Domain** | news.saa-alliance.com |

### Deployment Architecture

```
┌─────────────────────────────────────┐
│         Nginx (Port 443)            │
│    SSL Termination (Let's Encrypt)  │
└──────────────┬──────────────────────┘
               │
               ↓
┌─────────────────────────────────────┐
│   FastAPI Backend (Port 18080)      │
│   systemd service                   │
│   signal-analysis-api.service       │
└──────────────┬──────────────────────┘
               │
               ↓
┌─────────────────────────────────────┐
│      SQLite Database                │
│      /var/www/signal-analysis-api/  │
│      signals.db                     │
└─────────────────────────────────────┘
```

### Service Configuration

#### Systemd Service

**File:** `/etc/systemd/system/signal-analysis-api.service`

```ini
[Unit]
Description=Signal Analysis API
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/signal-analysis-api
Environment="PATH=/var/www/signal-analysis-api/venv/bin"
ExecStart=/var/www/signal-analysis-api/venv/bin/uvicorn app:app --host 127.0.0.1 --port 18080
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

**Management:**

```bash
sudo systemctl start signal-analysis-api
sudo systemctl stop signal-analysis-api
sudo systemctl restart signal-analysis-api
sudo systemctl status signal-analysis-api
sudo systemctl enable signal-analysis-api  # Auto-start on boot
```

#### Nginx Configuration

**File:** `/etc/nginx/sites-enabled/news.saa-alliance.com`

```nginx
server {
    listen 443 ssl http2;
    server_name news.saa-alliance.com;

    ssl_certificate /etc/letsencrypt/live/news.saa-alliance.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/news.saa-alliance.com/privkey.pem;
    
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    location / {
        proxy_pass http://127.0.0.1:18080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        proxy_connect_timeout 300s;
        proxy_send_timeout 300s;
        proxy_read_timeout 300s;
    }

    location /static {
        alias /var/www/signal-analysis-api/static;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}

server {
    listen 80;
    server_name news.saa-alliance.com;
    return 301 https://$server_name$request_uri;
}
```

### Deployment Process

#### Initial Setup

```bash
# 1. Clone repository
cd /var/www
git clone <repository-url> signal-analysis-api
cd signal-analysis-api

# 2. Create virtual environment
python3 -m venv venv
source venv/bin/activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Configure environment
cp env.example .env
nano .env  # Add API keys

# 5. Initialize database
python -c "from app import db; db().execute('SELECT 1')"

# 6. Set permissions
sudo chown -R www-data:www-data /var/www/signal-analysis-api

# 7. Configure systemd
sudo cp signal-analysis-api.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable signal-analysis-api
sudo systemctl start signal-analysis-api

# 8. Configure Nginx
sudo cp nginx-config /etc/nginx/sites-available/news.saa-alliance.com
sudo ln -s /etc/nginx/sites-available/news.saa-alliance.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# 9. Setup SSL (Let's Encrypt)
sudo certbot --nginx -d news.saa-alliance.com
```

#### Updates

```bash
# 1. Pull latest changes
cd /var/www/signal-analysis-api
git pull

# 2. Update dependencies (if needed)
source venv/bin/activate
pip install -r requirements.txt

# 3. Restart service
sudo systemctl restart signal-analysis-api

# 4. Check status
sudo systemctl status signal-analysis-api
tail -f /var/www/signal-analysis-api/app.log
```

### Environment Variables

**File:** `.env`

```env
# NVIDIA API
NVIDIA_API_KEY=your-nvidia-api-key-here

# Telegram (optional)
TELEGRAM_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHANNEL_RU=@your_channel

# Database
DB_PATH=signals.db

# Application
LOG_LEVEL=INFO
```

### Backup Strategy

#### Database Backup

```bash
# Daily backup script
#!/bin/bash
BACKUP_DIR="/var/backups/signal-analysis"
DATE=$(date +%Y%m%d_%H%M%S)
mkdir -p $BACKUP_DIR
cp /var/www/signal-analysis-api/signals.db $BACKUP_DIR/signals_$DATE.db
# Keep only last 30 days
find $BACKUP_DIR -name "signals_*.db" -mtime +30 -delete
```

**Cron Job:**

```cron
0 2 * * * /usr/local/bin/backup-signal-analysis.sh
```

---

## Infrastructure

### Server Specifications

| Component | Specification |
|-----------|---------------|
| **CPU** | 18 cores |
| **RAM** | 96 GB |
| **Storage** | 700 GB SSD |
| **Network** | High-speed connection |
| **OS** | Ubuntu 24.04 LTS |

### Resource Utilization

| Resource | Current Usage | Capacity | Utilization |
|----------|---------------|----------|-------------|
| **CPU** | < 10% | 18 cores | Excellent |
| **RAM** | ~4-8 GB | 96 GB | < 10% |
| **Storage** | ~50-100 GB | 700 GB | < 15% |
| **Network** | Low | High | Low |

### Network Configuration

- **Public IP:** 173.212.208.123
- **Domain:** news.saa-alliance.com
- **SSL/TLS:** Let's Encrypt (A+ rating)
- **Ports Open:**
  - 80 (HTTP → redirect to HTTPS)
  - 443 (HTTPS)
  - 22 (SSH)

### Firewall Configuration

```bash
# UFW setup
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw enable
```

### Monitoring

- **Uptime Monitoring:** External service (99.9% uptime)
- **Log Monitoring:** `app.log` rotation
- **Resource Monitoring:** System metrics (CPU, RAM, disk)
- **Health Checks:** `/health` endpoint

---

## Security

### Security Layers

#### 1. Network Security

- ✅ Firewall (UFW) configured
- ✅ Only necessary ports open (22, 80, 443)
- ✅ Backend listens on localhost only (127.0.0.1)
- ✅ SSL/TLS encryption (Let's Encrypt)
- ✅ HTTPS enforced (HTTP → HTTPS redirect)

#### 2. Application Security

- ✅ API keys in environment variables (not in code)
- ✅ SQL injection protection (Pydantic validation, parameterized queries)
- ✅ Input validation (Pydantic models)
- ✅ Rate limiting (semaphore for LLM calls)
- ✅ CORS configured
- ✅ Error messages don't expose sensitive information

#### 3. Data Security

- ✅ Database file permissions (readable by app user only)
- ✅ `.env` file not in version control
- ✅ WAL mode for database integrity
- ✅ Regular backups

#### 4. Access Control

- ✅ Service runs as non-root user (`www-data`)
- ✅ SSH key authentication (no password)
- ✅ Systemd service isolation

### Best Practices

1. **Never commit secrets** - All API keys in `.env`
2. **Regular updates** - Keep dependencies updated
3. **Logging** - Comprehensive logging for audit
4. **Backups** - Daily database backups
5. **Monitoring** - Health checks and alerts

### Security Recommendations

1. **Add authentication** - Implement API key or OAuth
2. **Rate limiting** - Add rate limiting middleware
3. **WAF** - Consider Web Application Firewall
4. **DDoS protection** - Cloudflare or similar
5. **Regular security audits** - Dependency scanning

---

## Performance

### Performance Metrics

See [BENCHMARKS.md](./BENCHMARKS.md) for detailed performance metrics.

#### Key Metrics Summary

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| **API Response Time** | < 200ms | < 200ms | ✅ |
| **Page Load Time** | < 1s | < 1s | ✅ |
| **Database Query** | < 50ms | < 50ms | ✅ |
| **AI Analysis** | < 60s | 30-60s | ✅ |
| **System Uptime** | > 99% | 99.9% | ✅ |

### Performance Optimizations

#### Backend Optimizations

- ✅ Async/await for all I/O operations
- ✅ Connection pooling for database
- ✅ Semaphore control (max 2 parallel LLM calls)
- ✅ Retry logic with exponential backoff
- ✅ Batch processing for analysis
- ✅ Pipeline lock for serialization

#### Database Optimizations

- ✅ WAL mode for concurrent access
- ✅ Indexes on frequently queried fields
- ✅ 64MB cache size
- ✅ Prepared statements
- ✅ Query optimization

#### Frontend Optimizations

- ✅ Minimal JavaScript
- ✅ CSS optimization
- ✅ Asset caching
- ✅ Lazy loading
- ✅ Real-time polling (30s interval)

### Scalability

**Current Capacity:**
- Handles **10-20x** current load
- Server resources: 18 CPU cores, 96 GB RAM
- No infrastructure bottlenecks identified

**Scaling Options:**

1. **Horizontal Scaling:** Add more Python workers
2. **Database Scaling:** Migrate to PostgreSQL/Neo4j if needed
3. **Caching:** Add Redis for API response caching
4. **CDN:** Add CDN for static assets

---

## Monitoring & Logging

### Logging

#### Application Logs

**File:** `app.log`

**Format:**
```
2025-12-07 12:00:00 - INFO - Ingestion started
2025-12-07 12:00:01 - INFO - RSS feed fetched: CryptoNews
2025-12-07 12:00:05 - ERROR - LLM API call failed: timeout
```

**Log Rotation:**

```bash
# /etc/logrotate.d/signal-analysis
/var/www/signal-analysis-api/app.log {
    daily
    rotate 30
    compress
    delaycompress
    notifempty
    missingok
    create 0640 www-data www-data
}
```

#### System Logs

```bash
# Systemd journal
sudo journalctl -u signal-analysis-api -f

# Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Health Monitoring

#### Health Endpoint

```http
GET /health
```

**Response:**

```json
{
  "status": "healthy",
  "version": "1.6.2",
  "database": "connected",
  "uptime": 86400,
  "timestamp": "2025-12-07T12:00:00Z"
}
```

#### Monitoring Checks

1. **Service Status:** `systemctl status signal-analysis-api`
2. **Database Connection:** Health endpoint
3. **API Response Time:** External monitoring
4. **Resource Usage:** System metrics
5. **Error Rate:** Log analysis

### Alerting

**Recommended Setup:**

1. **Uptime Monitoring:** External service (Pingdom, UptimeRobot)
2. **Error Alerts:** Log aggregation (ELK, Sentry)
3. **Resource Alerts:** System monitoring (Prometheus, Grafana)
4. **Email/Slack Alerts:** For critical issues

---

## Development Setup

### Prerequisites

- Python 3.10+
- Node.js 18+ (for frontend components)
- SQLite 3
- Git

### Local Development

#### 1. Clone Repository

```bash
git clone <repository-url>
cd signal-analysis
```

#### 2. Create Virtual Environment

```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

#### 3. Install Dependencies

```bash
# Python dependencies
pip install -r requirements.txt

# Node.js dependencies (for frontend components)
npm install
```

#### 4. Configure Environment

```bash
cp env.example .env
# Edit .env and add your API keys
```

#### 5. Initialize Database

```bash
python -c "from app import db; db().execute('SELECT 1')"
```

#### 6. Run Application

```bash
# Start Python backend
python run.py

# Or use uvicorn directly
uvicorn app:app --host 127.0.0.1 --port 18080 --reload
```

#### 7. Access Application

- **Dashboard:** http://localhost:18080
- **API Docs:** http://localhost:18080/docs
- **Health Check:** http://localhost:18080/health

### Development Tools

#### Code Quality

```bash
# Linting
pylint app.py

# Formatting
black app.py

# Type checking
mypy app.py
```

#### Testing

```bash
# Unit tests (Jest)
npm test

# E2E tests (Playwright)
npm run test:e2e

# Watch mode
npm run test:watch
```

### Project Structure

```
signal-analysis/
├── app.py                  # Main FastAPI application
├── run.py                  # Server entry point
├── requirements.txt        # Python dependencies
├── package.json           # Node.js dependencies
├── .env                   # Environment variables (not in git)
├── signals.db             # SQLite database
├── app.log                # Application logs
│
├── src/                   # Frontend components (optional)
│   ├── components/        # React components
│   ├── context/           # React Context
│   ├── i18n/              # Internationalization
│   └── utils/             # Utilities
│
├── __tests__/             # Jest unit tests
├── playwright/            # Playwright E2E tests
│
├── impact_graph.py        # Impact graph service
├── impact_graph_v2.py     # Impact graph v2
├── impact_graph_neo4j.py  # Neo4j graph service
├── telegram_alerts.py     # Telegram integration
├── nvidia_retriever.py    # NVIDIA retriever
├── nvidia_ocr.py          # NVIDIA OCR
├── nemotron_ner.py        # Named Entity Recognition
│
└── go-signal-analysis/    # Go dashboard (optional)
    ├── main.go
    └── go.mod
```

---

## Testing

### Test Strategy

#### Unit Tests

**Framework:** Jest  
**Location:** `__tests__/`

**Coverage:**
- Deduplication logic
- Text processing utilities
- API client functions

**Run Tests:**

```bash
npm test
npm run test:watch
```

#### Integration Tests

**Framework:** Playwright  
**Location:** `playwright/`

**Coverage:**
- End-to-end workflows
- UI interactions
- Internationalization

**Run Tests:**

```bash
npm run test:e2e
npm run test:e2e:ui
```

### Test Coverage Goals

| Component | Target Coverage |
|-----------|----------------|
| **Backend API** | 70%+ |
| **Frontend Components** | 60%+ |
| **Business Logic** | 80%+ |

### Manual Testing Checklist

- [ ] RSS feed ingestion works
- [ ] AI analysis completes successfully
- [ ] Dashboard displays signals correctly
- [ ] Filters work as expected
- [ ] Export (CSV/PDF) generates correctly
- [ ] Telegram alerts sent
- [ ] Health endpoint returns correct status
- [ ] Multi-language switching works

---

## Troubleshooting

### Common Issues

#### 1. Service Won't Start

**Symptoms:** `systemctl status` shows failed state

**Debugging:**

```bash
# Check logs
sudo journalctl -u signal-analysis-api -n 50

# Check permissions
ls -la /var/www/signal-analysis-api

# Check Python path
which python3
```

**Solutions:**

- Verify virtual environment path in systemd service
- Check file permissions (should be www-data:www-data)
- Verify Python dependencies installed

#### 2. Database Locked

**Symptoms:** "database is locked" errors

**Solutions:**

```bash
# Check for stuck processes
ps aux | grep sqlite

# Increase timeout in app.py
PRAGMA busy_timeout = 60000;

# Restart service
sudo systemctl restart signal-analysis-api
```

#### 3. LLM API Failures

**Symptoms:** Analysis not completing, timeout errors

**Debugging:**

```bash
# Check NVIDIA API key
echo $NVIDIA_API_KEY

# Check network connectivity
curl https://api.nvidia.com/v1/models

# Check logs for specific errors
tail -f app.log | grep -i "nvidia\|llm"
```

**Solutions:**

- Verify API key in `.env`
- Check rate limits
- Increase timeout values
- Verify network connectivity

#### 4. High Memory Usage

**Symptoms:** Server memory consumption high

**Debugging:**

```bash
# Check memory usage
free -h
ps aux --sort=-%mem | head

# Check for memory leaks
top -p $(pgrep -f "uvicorn app:app")
```

**Solutions:**

- Restart service periodically
- Reduce batch sizes
- Check for memory leaks in code
- Increase server RAM if needed

#### 5. Slow Response Times

**Symptoms:** API responses > 500ms

**Debugging:**

```bash
# Check database queries
sqlite3 signals.db "EXPLAIN QUERY PLAN SELECT * FROM signals WHERE sector='CRYPTO'"

# Check slow queries in logs
grep -i "slow\|timeout" app.log

# Check server load
uptime
htop
```

**Solutions:**

- Optimize database queries
- Add missing indexes
- Enable caching
- Scale horizontally

### Diagnostic Commands

```bash
# Check service status
sudo systemctl status signal-analysis-api

# View recent logs
tail -100 /var/www/signal-analysis-api/app.log

# Check database integrity
sqlite3 signals.db "PRAGMA integrity_check;"

# Check database statistics
sqlite3 signals.db "SELECT COUNT(*) FROM signals;"

# Check network connectivity
curl -I https://news.saa-alliance.com/health

# Check SSL certificate
openssl s_client -connect news.saa-alliance.com:443 -servername news.saa-alliance.com

# Check disk space
df -h

# Check process status
ps aux | grep uvicorn
```

---

## Appendices

### Appendix A: Environment Variables Reference

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `NVIDIA_API_KEY` | Yes | NVIDIA API key (starts with `nvapi-`) | `nvapi-xxxxx...` |
| `NVIDIA_MODEL` | No | NVIDIA model identifier | `deepseek-ai/deepseek-r1` |
| `NEMOTRON_NER_ENABLED` | No | Enable Nemotron NER service | `true` / `false` |
| `DISABLE_AI_ANALYSIS` | No | Disable AI analysis (dev mode) | `true` / `false` |
| `TELEGRAM_TOKEN` | No | Telegram bot token | `1234567890:ABC...` |
| `TELEGRAM_CHANNEL_RU` | No | Telegram channel | `@channel` |
| `DB_PATH` | No | Database path | `signals.db` |
| `LOG_LEVEL` | No | Logging level | `INFO` |
| `OPENAI_API_KEY` | No | OpenAI API key (optional fallback) | `sk-xxx` |
| `OPENAI_MODEL` | No | OpenAI model identifier | `gpt-4o` |

### Appendix B: Supported Sectors

| Sector Code | Description |
|-------------|-------------|
| `CRYPTO` | Cryptocurrencies |
| `TECH` | Technology |
| `BIOTECH` | Biotechnology |
| `SEMIS` | Semiconductors |
| `ENERGY` | Energy |
| `FINTECH` | Financial Technology |
| `COMMODITIES` | Commodities |
| `EMERGING_MARKETS` | Emerging Markets |
| `TREASURY` | Regulators (SEC, Fed) |

### Appendix C: RSS Feed Sources

- CryptoNews
- SEC.gov
- FDA.gov
- Bloomberg
- Reuters
- ... (20+ total sources)

### Appendix D: API Rate Limits

| Service | Limit |
|---------|-------|
| **NVIDIA API** | Per API key limits |
| **Telegram Bot** | 30 messages/second |
| **Internal API** | No limit (consider adding) |

### Appendix E: Contact Information

**Maintainer:** Scientific Analytics Alliance  
**Production Domain:** news.saa-alliance.com  
**Support:** Check logs and health endpoint

### Appendix F: Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.6.2 | Dec 2025 | Current production version |
| 1.6.1 | Nov 2025 | Neo4j graph traversal |
| 1.6.0 | Nov 2025 | NVIDIA API integration |
| 1.5.0 | Oct 2025 | Impact graph implementation |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Dec 2025 | Technical Team | Initial Technical Dossier |

---

**End of Technical Dossier**

# Platform 5: ARIN Platform

**Version**: 1.0.0  
**Last Updated**: January 2025  
**Status**: Production Ready  
**License**: MIT

---

## Executive Summary

**ARIN Platform** (Autonomous Risk Intelligence Network) is an institutional-grade, multi-agent AI system designed for predictive risk management in financial markets. The platform leverages six specialized autonomous agents to analyze credit, market, operational, liquidity, regulatory, and systemic risks, providing comprehensive risk intelligence through graph-based analysis and advanced machine learning.

### Key Highlights

- **6 Specialized Risk Agents**: Autonomous AI agents for comprehensive risk analysis
- **Graph-Based Intelligence**: Dependency analysis and cascade effect detection
- **NVIDIA API Integration**: GPU-accelerated AI via NVIDIA NIM (DeepSeek R1 reasoning model)
- **LLM-Powered Reasoning**: DeepSeek R1 (NVIDIA API) and GPT-4 integration
- **Production-Ready**: Full security, compliance, and scalability features
- **Unified Integration Hub**: Centralized data aggregation from SAA Alliance projects
- **High Performance**: < 500ms response times, 2000+ RPS capacity

### Production Server

- **Provider**: Contabo
- **Server Type**: Cloud VPS 60 SSD
- **IP Address**: 173.212.208.123
- **Specifications**: 18 vCPU (AMD EPYC), 96 GB RAM, 678 GB NVMe SSD, 1 Gbit/s network

---

## Table of Contents

1. [System Overview](#system-overview)
2. [Architecture](#architecture)
3. [Technology Stack](#technology-stack)
4. [Core Components](#core-components)
5. [Security & Compliance](#security--compliance)
6. [Performance & Scalability](#performance--scalability)
7. [Integration Capabilities](#integration-capabilities)
8. [API Documentation](#api-documentation)
9. [Deployment](#deployment)
10. [Monitoring & Operations](#monitoring--operations)
11. [Development & Testing](#development--testing)

---

## System Overview

### Purpose

ARIN Platform serves as a comprehensive risk management system that:

- Analyzes multiple risk dimensions simultaneously
- Provides predictive risk intelligence through ML models
- Detects cascade effects and systemic dependencies
- Aggregates data from multiple sources for unified analysis
- Delivers actionable insights and recommendations

### Key Features

#### 1. Multi-Agent Risk Analysis

Six specialized autonomous agents work in parallel:

- **Credit Risk Agent**: Analyzes creditworthiness and default probability
- **Market Risk Agent**: Evaluates market volatility and VaR/CVaR
- **Operational Risk Agent**: Assesses operational failures and controls
- **Liquidity Risk Agent**: Monitors liquidity positions and cash flow
- **Regulatory Risk Agent**: Ensures compliance with regulations
- **Systemic Risk Agent**: Detects systemic dependencies and contagion

#### 2. Graph-Based Intelligence

- Dependency graph construction from portfolio data
- Cascade effect detection
- Cluster analysis for risk concentration
- GNN (Graph Neural Network) predictions

#### 3. AI/ML Engine

- **NVIDIA API Integration**: Primary LLM provider via NVIDIA NIM
  - GPU-accelerated AI without local GPU hardware
  - DeepSeek R1 reasoning model for complex analysis
  - Real-time logging and monitoring
- **LLM Integration**: DeepSeek R1 (NVIDIA API) for reasoning, GPT-4 as fallback
- **ML Models**: XGBoost for credit risk, GNN for systemic analysis
- **Continuous Learning**: Model retraining and evaluation

#### 4. Unified Integration

- Centralized data aggregation from SAA Alliance projects
- Export API for external project integration
- Unified verdict generation from multiple data sources

#### 5. Production Features

- JWT authentication and OAuth 2.0
- Role-based access control (RBAC)
- API key management
- GDPR compliance
- Audit logging
- Performance monitoring
- Horizontal scaling

---

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    ARIN Platform                             │
├─────────────────────────────────────────────────────────────┤
│  Frontend Layer (Next.js/React/TypeScript)                  │
│  - Dashboard & Visualization                                 │
│  - Real-time Monitoring                                     │
│  - Graph Visualization                                       │
├─────────────────────────────────────────────────────────────┤
│  API Gateway (FastAPI)                                       │
│  - Authentication & Authorization                           │
│  - Rate Limiting                                            │
│  - Request Routing                                           │
├─────────────────────────────────────────────────────────────┤
│  Orchestrator                                                │
│  - Task Distribution                                         │
│  - Agent Coordination                                        │
│  - Workflow Management                                       │
├─────────────────────────────────────────────────────────────┤
│  6 Specialized Risk Agents                                   │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│  │  Credit  │ │  Market  │ │Operational│ │Liquidity│        │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘        │
│  ┌──────────┐ ┌──────────┐                                   │
│  │Regulatory│ │ Systemic │                                   │
│  └──────────┘ └──────────┘                                  │
├─────────────────────────────────────────────────────────────┤
│  AI Engine                                                   │
│  - LLM Manager (DeepSeek R1, GPT-4)                         │
│  - ML Models (XGBoost, GNN)                                  │
│  - Model Training & Evaluation                               │
├─────────────────────────────────────────────────────────────┤
│  Graph Builder                                               │
│  - Dependency Analysis                                        │
│  - Cascade Detection                                          │
│  - Cluster Analysis                                          │
│  - GNN Predictions                                           │
├─────────────────────────────────────────────────────────────┤
│  Integration Layer                                           │
│  - Unified Data Aggregation                                    │
│  - Export API                                                │
│  - External Project Clients                                   │
├─────────────────────────────────────────────────────────────┤
│  Data Layer                                                  │
│  - PostgreSQL + TimescaleDB (Time-series data)              │
│  - Neo4j (Graph database)                                    │
│  - Redis (Caching & Task Queue)                              │
└─────────────────────────────────────────────────────────────┘
```

### Component Interaction Flow

```
User Request
    ↓
API Gateway (Authentication, Authorization)
    ↓
Orchestrator (Task Distribution)
    ↓
┌─────────────────────────────────────┐
│  Parallel Agent Execution           │
│  - Credit Risk Agent                │
│  - Market Risk Agent                 │
│  - Operational Risk Agent            │
│  - Liquidity Risk Agent              │
│  - Regulatory Risk Agent             │
│  - Systemic Risk Agent               │
└─────────────────────────────────────┘
    ↓
Graph Builder (Dependency Analysis)
    ↓
AI Engine (LLM Reasoning, ML Inference)
    ↓
Result Aggregation & Verdict Generation
    ↓
Response to User
```

### Data Flow

1. **Data Ingestion**: External projects → Export API → Unified Data Store
2. **Risk Analysis**: Portfolio Data → Agents → Risk Metrics
3. **Graph Construction**: Risk Metrics → Graph Builder → Dependency Graph
4. **AI Processing**: Graph + Metrics → LLM/ML → Insights
5. **Result Delivery**: Insights → API → Frontend/Client

---

## Technology Stack

### Backend Framework

- **FastAPI 0.104+**: Modern, high-performance web framework
- **Python 3.10+**: Programming language
- **Uvicorn**: ASGI server
- **Pydantic 2.5.0**: Data validation

### AI/ML Technologies

- **NVIDIA API**: Primary LLM provider via NVIDIA NIM (NVIDIA Inference Microservices)
  - **Endpoint**: `https://integrate.api.nvidia.com/v1`
  - **Model**: DeepSeek R1 (`deepseek-ai/deepseek-r1`)
  - **Purpose**: Reasoning tasks for risk analysis
  - **Advantages**: GPU-accelerated, no local GPU required, scalable
- **DeepSeek R1**: Primary reasoning LLM via NVIDIA API
- **GPT-4**: Fallback LLM (OpenAI)
- **XGBoost 2.0.3**: Credit risk prediction
- **PyTorch 2.1.0**: Deep learning framework
- **PyTorch Geometric 2.4.0**: Graph neural networks
- **Transformers 4.35.0**: NLP models

### Databases

- **PostgreSQL 15+**: Primary relational database
- **TimescaleDB**: Time-series extension for PostgreSQL
- **Neo4j 5.14.1**: Graph database for dependency analysis
- **Redis 4.5.2+**: Caching and task queue

### Task Processing

- **Celery 5.3+**: Distributed task queue
- **Redis**: Message broker for Celery

### Data Processing

- **Pandas 2.1.3**: Data manipulation
- **NumPy 1.26.2**: Numerical computing
- **Polars 0.19.0**: High-performance dataframes
- **SciPy 1.11.4**: Scientific computing
- **NetworkX 3.2.1**: Graph algorithms

### Security

- **python-jose 3.3.0**: JWT handling
- **passlib 1.7.4**: Password hashing (bcrypt)
- **cryptography 41.0.7**: Encryption

### Frontend

- **Next.js 14+**: React framework
- **React 18+**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Styling

### Infrastructure

- **Docker**: Containerization
- **Docker Compose**: Multi-container orchestration
- **Kubernetes**: Container orchestration (optional)
- **Nginx**: Reverse proxy and load balancer

### Development Tools

- **pytest 7.4.3**: Testing framework
- **black 23.11.0**: Code formatting
- **flake8 6.1.0**: Linting
- **mypy 1.7.0**: Type checking

---

## Core Components

### 1. Risk Analysis Agents

#### Base Agent Architecture

All agents inherit from `BaseAgent` class with common functionality:

- Task execution and coordination
- Result caching
- Error handling and retries
- Performance monitoring
- LLM integration for reasoning

#### Credit Risk Agent

**File**: `backend/agents/credit_risk_agent.py`

**Capabilities**:
- Creditworthiness assessment
- Default probability calculation
- Credit score generation
- XGBoost model integration

**Input**: Portfolio data, financial metrics  
**Output**: Credit risk score, default probability, recommendations

#### Market Risk Agent

**File**: `backend/agents/market_risk_agent.py`

**Capabilities**:
- Value at Risk (VaR) calculation
- Conditional VaR (CVaR)
- Volatility analysis
- Stress testing scenarios

**Input**: Market data, portfolio positions  
**Output**: VaR/CVaR metrics, volatility, stress test results

#### Operational Risk Agent

**File**: `backend/agents/operational_risk_agent.py`

**Capabilities**:
- Operational failure assessment
- Control effectiveness evaluation
- Process risk analysis
- Incident impact assessment

**Input**: Operational data, control metrics  
**Output**: Operational risk score, control gaps, recommendations

#### Liquidity Risk Agent

**File**: `backend/agents/liquidity_risk_agent.py`

**Capabilities**:
- Liquidity position monitoring
- Cash flow analysis
- Liquidity ratio calculation
- Funding gap detection

**Input**: Cash flow data, liquidity metrics  
**Output**: Liquidity risk score, funding gaps, recommendations

#### Regulatory Risk Agent

**File**: `backend/agents/regulatory_risk_agent.py`

**Capabilities**:
- Regulatory compliance checking
- Regulation change impact
- Compliance gap analysis
- Regulatory reporting support

**Input**: Regulatory data, compliance metrics  
**Output**: Compliance status, gaps, recommendations

#### Systemic Risk Agent

**File**: `backend/agents/systemic_risk_agent.py`

**Capabilities**:
- Systemic dependency detection
- Contagion risk analysis
- Network effect evaluation
- GNN-based predictions

**Input**: Portfolio data, dependency graph  
**Output**: Systemic risk score, contagion paths, recommendations

### 2. Graph Builder

**File**: `backend/graph_builder/`

**Components**:
- Node creation and management
- Edge construction (dependencies)
- Graph traversal algorithms
- Cluster detection
- GNN model integration

**Capabilities**:
- Build dependency graphs from portfolio data
- Detect cascade effects
- Identify risk clusters
- Predict systemic impacts using GNN

### 3. AI Engine

**File**: `backend/ai_engine/`

#### LLM Manager

**File**: `backend/ai_engine/llm/llm_manager.py`

**Features**:
- DeepSeek R1 integration (NVIDIA API)
- GPT-4 fallback mechanism
- Prompt management
- Response caching
- Token usage optimization

#### ML Models

**File**: `backend/ai_engine/ml_models/`

**Models**:
- **XGBoost Credit Model**: Credit risk prediction
- **GNN Systemic Model**: Systemic risk analysis

**Training**:
- Automated retraining pipeline
- Model evaluation and validation
- Version management
- A/B testing support

### 3.1 NVIDIA API Integration

**File**: `backend/ai_engine/llm/llm_manager.py`

ARIN Platform leverages **NVIDIA API** as the primary LLM provider for reasoning tasks, providing GPU-accelerated AI capabilities without requiring physical GPU hardware on the server.

#### Overview

**NVIDIA NIM (NVIDIA Inference Microservices)** provides cloud-based access to state-of-the-art AI models through a simple API interface. ARIN Platform uses NVIDIA API for:

- **Primary LLM Provider**: DeepSeek R1 reasoning model
- **Risk Analysis**: All 6 risk agents use NVIDIA API for intelligent reasoning
- **Reasoning Tasks**: Complex financial analysis requiring step-by-step thinking
- **Fallback Support**: GPT-4 as backup if NVIDIA API is unavailable

#### Configuration

**Endpoint**: `https://integrate.api.nvidia.com/v1`

**Model**: `deepseek-ai/deepseek-r1`

**Environment Variables**:
```env
NVIDIA_API_KEY=your_nvidia_api_key
```

**Configuration File**: `backend/config.py`
```python
nvidia_api_key: Optional[str] = None
nvidia_nim_endpoint: str = "https://integrate.api.nvidia.com/v1"
nvidia_reasoning_model: str = "deepseek-ai/deepseek-r1"
```

#### Key Features

**1. DeepSeek R1 Reasoning Model**

- **Purpose**: Advanced reasoning for complex risk analysis
- **Capabilities**:
  - Step-by-step thinking process
  - Financial data analysis
  - Risk factor evaluation
  - Recommendation generation
- **Advantages**:
  - Shows reasoning process (transparent AI)
  - Better accuracy for complex tasks
  - Optimized for financial analysis

**2. API-Based Architecture**

- **No GPU Required**: Works on CPU-only servers
- **Scalable**: NVIDIA manages infrastructure
- **Always Updated**: Latest model versions automatically
- **Low Latency**: Optimized API endpoints

**3. Integration with Risk Agents**

All 6 risk agents use NVIDIA API for reasoning:

- **Credit Risk Agent**: Creditworthiness analysis, default probability assessment
- **Market Risk Agent**: Volatility analysis, VaR calculations, stress testing
- **Operational Risk Agent**: Process vulnerability assessment, control evaluation
- **Liquidity Risk Agent**: Cash flow analysis, funding gap detection
- **Regulatory Risk Agent**: Compliance checking, regulatory change impact
- **Systemic Risk Agent**: Dependency analysis, cascade effect detection

#### Request Flow

```
Risk Agent
    ↓
LLM Manager
    ↓
NVIDIA API (https://integrate.api.nvidia.com/v1)
    ↓
DeepSeek R1 Model
    ↓
Reasoning Process + Analysis
    ↓
Response to Agent
    ↓
Result Aggregation
```

#### Logging and Monitoring

**File**: `backend/api/routes/nvidia_logs.py`

ARIN Platform includes comprehensive logging for NVIDIA API operations:

**Log Events**:
- Request initiation
- Model processing
- Reasoning process capture
- Response completion
- Error handling

**Log Levels**:
- `INFO`: Successful operations
- `WARNING`: Non-critical issues
- `ERROR`: Failed requests

**Monitoring Endpoints**:

```http
GET /api/v1/nvidia-logs/recent?limit=50
```

**Response**:
```json
{
  "logs": [
    {
      "level": "INFO",
      "message": "✅ DeepSeek R1 (NVIDIA) client initialized",
      "timestamp": "2025-01-15T10:30:00Z",
      "metadata": {
        "endpoint": "https://integrate.api.nvidia.com/v1",
        "model": "deepseek-ai/deepseek-r1",
        "status": "ready"
      }
    }
  ],
  "total": 50
}
```

**Streaming Logs**:

```http
GET /api/v1/nvidia-logs/stream
```

Server-Sent Events (SSE) stream for real-time log monitoring.

**Statistics**:

```http
GET /api/v1/nvidia-logs/stats
```

**Response**:
```json
{
  "total_logs": 1500,
  "info_logs": 1400,
  "error_logs": 50,
  "warning_logs": 50,
  "last_log_time": "2025-01-15T10:30:00Z"
}
```

#### Frontend Integration

**File**: `frontend/src/components/nvidia/NvidiaLogsMonitor.tsx`

Real-time NVIDIA API logs displayed in browser console:

- **Request Start**: Shows task description, endpoint, model
- **Processing**: Displays reasoning process
- **Completion**: Response time, tokens used, analysis summary
- **Errors**: Detailed error messages with solutions

**Console Output Example**:
```
🚀 NVIDIA API Request Started
  📝 What NVIDIA API is doing: Credit risk analysis: default probability assessment...
  📍 Endpoint: https://integrate.api.nvidia.com/v1/chat/completions
  🤖 Model: deepseek-ai/deepseek-r1
  💭 Reasoning: Enabled (DeepSeek R1 will show thinking process)

✅ NVIDIA API Analysis Completed
  ⏱️  Response Time: 11.47s
  🎯 Tokens Used: 1234
  🧠 Reasoning Process: 2345 characters
  💡 DeepSeek R1 showed its thinking process
```

#### Advantages

**1. No GPU Hardware Required**

- Works on CPU-only servers (like Contabo VPS)
- No need for expensive GPU infrastructure
- Lower operational costs

**2. Scalability**

- NVIDIA manages GPU infrastructure
- Automatic scaling based on demand
- No infrastructure management overhead

**3. Cost-Effective**

- **Development**: Free tier available
- **Production**: Pay-as-you-go pricing
- No upfront hardware costs

**4. Always Updated**

- Latest model versions automatically
- No manual updates required
- Access to newest AI capabilities

**5. High Performance**

- Optimized API endpoints
- Low latency responses
- GPU acceleration on NVIDIA infrastructure

**6. Reasoning Transparency**

- DeepSeek R1 shows thinking process
- Better explainability for financial decisions
- Audit trail for compliance

#### API Key Setup

**1. Get NVIDIA API Key**:

1. Register at https://build.nvidia.com
2. Create API key in dashboard
3. Copy API key

**2. Configure ARIN Platform**:

```bash
# On server
cd /opt/arin-platform
nano .env

# Add:
NVIDIA_API_KEY=your_api_key_here
```

**3. Restart Backend**:

```bash
systemctl restart arin-backend
```

**4. Verify Configuration**:

Check logs for initialization message:
```
✅ [NVIDIA API] DeepSeek R1 (NVIDIA) client initialized
🔗 [NVIDIA API] Endpoint: https://integrate.api.nvidia.com/v1
🤖 [NVIDIA API] Model: deepseek-ai/deepseek-r1
🚀 [NVIDIA API] Ready to process requests
```

#### Fallback Mechanism

If NVIDIA API is unavailable or API key is not configured:

1. **Primary**: DeepSeek R1 via NVIDIA API
2. **Fallback**: GPT-4 via OpenAI API (if configured)
3. **Error Handling**: Graceful degradation with error messages

**Configuration Priority**:
```python
# Priority order:
1. NVIDIA API (DeepSeek R1) - if NVIDIA_API_KEY is set
2. OpenAI API (GPT-4) - if OPENAI_API_KEY is set
3. Error - if neither is configured
```

#### Performance Metrics

**Response Times**:
- Average: 5-10 seconds for complex analysis
- P95: < 15 seconds
- P99: < 20 seconds

**Token Usage**:
- Average: 1000-2000 tokens per analysis
- Reasoning process: 500-1000 tokens
- Final analysis: 500-1000 tokens

**Success Rate**:
- Target: > 95%
- Current: 98%+ (with proper API key configuration)

#### Use Cases

**1. Credit Risk Analysis**

NVIDIA API analyzes:
- Financial metrics
- Credit history
- Default probability
- Risk factors

**2. Market Risk Assessment**

NVIDIA API evaluates:
- Volatility patterns
- Correlation analysis
- Stress scenarios
- VaR calculations

**3. Operational Risk Evaluation**

NVIDIA API identifies:
- Process vulnerabilities
- Control gaps
- Failure probabilities
- Improvement recommendations

**4. Regulatory Compliance**

NVIDIA API checks:
- Regulatory requirements
- Compliance status
- Change impacts
- Gap analysis

#### References

- **NVIDIA API Documentation**: https://build.nvidia.com
- **NVIDIA NIM Endpoint**: https://integrate.api.nvidia.com/v1
- **DeepSeek R1 Model**: deepseek-ai/deepseek-r1
- **API Key Registration**: https://build.nvidia.com

### 4. Orchestrator

**File**: `backend/orchestrator/`

**Responsibilities**:
- Task distribution to agents
- Agent coordination
- Result aggregation
- Workflow management
- Error handling and retries

### 5. Integration Layer

**File**: `backend/integrations/`

#### Unified Integration

**File**: `backend/integrations/unified/`

**Capabilities**:
- Data aggregation from SAA Alliance projects
- Unified data schema
- Data validation and normalization
- Verdict generation from multiple sources

**Integrated Projects**:
- Investment Dashboard (`invest.saa-alliance.com`)
- Risk Analyzer (`analyzer.saa-alliance.com`)
- News Analytics (`news.saa-alliance.com`)
- Crypto Analytics (`crypto.saa-alliance.com`)
- Risk Management (`risk.saa-alliance.com`)
- AI Trader (`ai-trader.saa-alliance.com`)

#### Export API

**File**: `backend/api/routes/unified.py`

**Endpoints**:
- `POST /api/v1/unified/export`: Receive data from external projects
- `GET /api/v1/unified/exports/{entity_id}`: View exported data
- `GET /api/v1/unified/verdict/{entity_id}`: Get final verdict
- `GET /api/v1/unified/sources/status`: Check source status

### 6. Data Layer

#### PostgreSQL + TimescaleDB

**Purpose**: Time-series data storage
- Risk analysis results
- Performance metrics
- Audit logs
- Historical data

**Configuration**:
- Connection pooling (30 connections + 20 overflow)
- Indexes for performance
- Automated backups

#### Neo4j

**Purpose**: Graph database
- Dependency graphs
- Relationship storage
- Graph queries
- Traversal operations

#### Redis

**Purpose**: Caching and task queue
- API response caching
- Agent result caching
- Celery message broker
- Session storage

**Configuration**:
- 20-30 GB cache allocation (with 96 GB RAM server)
- TTL-based expiration
- Cache warming strategies

---

## Security & Compliance

### Authentication & Authorization

#### JWT Authentication

**File**: `backend/auth/jwt_handler.py`

**Features**:
- JWT token generation and validation
- Configurable token expiration
- OAuth2 password flow support
- Token refresh mechanism

#### OAuth 2.0

**File**: `backend/auth/oauth.py`

**Supported Providers**:
- GitHub OAuth
- Google OAuth

#### Password Security

**File**: `backend/auth/password_handler.py`

**Features**:
- Bcrypt password hashing
- Secure password verification
- Password strength requirements

### Role-Based Access Control (RBAC)

**File**: `backend/auth/rbac.py`

**Roles**:
- **Admin**: Full system access
- **Analyst**: View and analyze risks
- **Viewer**: Read-only access
- **API User**: API access only

**Permissions**: 15+ granular permissions

**Implementation**:
```python
from backend.auth.rbac import require_permission, Permission

@router.post("/risks/analyze")
async def analyze_risk(
    current_user: TokenData = Depends(require_permission(Permission.ANALYZE_RISKS))
):
    # Only users with ANALYZE_RISKS permission can execute
    pass
```

### API Key Management

**File**: `backend/auth/api_keys.py`

**Features**:
- Secure API key generation
- Bcrypt key hashing
- Lifecycle management (create, revoke)
- Expiration support
- Usage tracking

**Endpoints**:
- `POST /api/v1/auth/api-keys`: Create API key
- `GET /api/v1/auth/api-keys`: List API keys
- `DELETE /api/v1/auth/api-keys/{key_id}`: Revoke API key

### Data Encryption

**File**: `backend/security/encryption.py`

**Features**:
- Data encryption at rest
- Fernet symmetric encryption
- PBKDF2 key derivation
- Secure key management

### Secrets Management

**File**: `backend/security/secrets_manager.py`

**Supported Backends**:
- Local (development)
- HashiCorp Vault (production)
- AWS Secrets Manager (alternative)

**Features**:
- Secret rotation
- Secure storage
- Access control

### GDPR Compliance

**File**: `backend/compliance/gdpr.py`

**Implemented Articles**:

- **Article 15** (Right of access): `GET /api/v1/compliance/gdpr/data`
- **Article 16** (Right to rectification): User data update
- **Article 17** (Right to be forgotten): `DELETE /api/v1/compliance/gdpr/data`
- **Article 20** (Data portability): `GET /api/v1/compliance/gdpr/export`

**Features**:
- Complete user data retrieval
- Data deletion
- Data export (JSON, CSV)
- Data anonymization

### Audit Logging

**File**: `backend/compliance/audit_logger.py`

**Event Types** (20+):
- Authentication: login, logout, login_failed
- Authorization: permission_denied, role_changed
- API Keys: api_key_created, api_key_revoked, api_key_used
- Risks: risk_analyzed, risk_viewed, risk_deleted
- Agents: agent_started, agent_stopped, agent_configured
- Data: data_accessed, data_exported, data_deleted
- System: config_changed, user_created, system_backup

**Storage**: TimescaleDB for time-series audit logs

### Data Retention Policies

**File**: `backend/compliance/data_retention.py`

**Policies**:
- **Financial Data**: 7 years (regulatory requirement)
- **Risk Analyses**: 5 years
- **Audit Logs**: 3 years
- **ML Models**: 2 years
- **Performance Metrics**: 1 year
- **Temporary Data**: 90 days
- **User Sessions**: 30 days

**Features**:
- Automated cleanup
- Configurable policies
- Dry-run mode

### Backup & Recovery

**File**: `backend/compliance/backup_recovery.py`

**Features**:
- Full, incremental, differential backups
- Selective component backup
- Automated recovery
- Backup lifecycle management

**Endpoints**:
- `POST /api/v1/compliance/backup`: Create backup
- `GET /api/v1/compliance/backup`: List backups
- `POST /api/v1/compliance/backup/{backup_id}/restore`: Restore backup

---

## Performance & Scalability

### Performance Targets

#### API Response Times

| Endpoint Category | Target (p95) | Target (p99) |
|-------------------|--------------|--------------|
| Standard API Requests | < 500ms | < 1s |
| Health Checks | < 100ms | < 200ms |
| Risk Analysis | < 5s | < 10s |
| Portfolio Sync | < 2s | < 5s |
| Graph Operations | < 1s | < 2s |
| LLM Queries | < 5s | < 10s |
| ML Model Inference | < 2s | < 5s |

#### Throughput

| Metric | Target | Server Capacity |
|--------|--------|-----------------|
| Requests per Second (RPS) | 1000+ | 2000+ (18 vCPU) |
| Concurrent Users | 1000+ | 2000+ (96 GB RAM) |
| API Requests per Minute | 60,000+ | 120,000+ |
| Risk Analyses per Hour | 1000+ | 3000+ (parallel processing) |
| Concurrent Risk Analyses | 10+ | 50+ (18 vCPU) |

### Optimization Strategies

#### Connection Pooling

- **Pool Size**: 30 connections (optimized for 18 vCPU)
- **Max Overflow**: 20 connections
- **Total Max Connections**: 50
- **Connection Timeout**: 30s
- **Pool Pre-ping**: Enabled

#### Caching

- **Cache Hit Rate Target**: > 75%
- **Cache Response Time**: < 10ms
- **Cache Size**: 20-30 GB (with 96 GB RAM server)
- **TTL Default**: 1 hour
- **Cache Warming**: Implemented

**Cached Data**:
- Agent results (TTL: 1 hour)
- Graph data (TTL: 30 min)
- LLM responses (TTL: 24 hours)
- Frequently accessed metrics (TTL: 5 min)

#### Async Processing

- **Celery Workers**: 10-15 workers (with 18 vCPU)
- **Task Queue**: Redis
- **Async Endpoints**: All long-running operations
- **Batch Processing**: Supported for large datasets

### Scalability

#### Horizontal Scaling

- **Docker Swarm**: Supported
- **Kubernetes**: Supported with HPA
- **Auto-scaling**: CPU/Memory based
- **Load Balancing**: Nginx

#### Resource Utilization Targets

| Resource | Optimal | Warning | Critical | Server Capacity |
|----------|---------|---------|----------|-----------------|
| CPU Usage | < 50% | 50% - 70% | > 70% | 18 vCPU (AMD EPYC) |
| Memory Usage | < 60% | 60% - 80% | > 80% | 96 GB RAM |
| Database Connections | < 70% | 70% - 80% | > 80% | 50+ connections |
| Disk Usage | < 70% | 70% - 85% | > 85% | 678 GB NVMe SSD |
| Network Bandwidth | < 70% | 70% - 85% | > 85% | 1 Gbit/s |

### Load Testing Results

**Baseline Performance** (on Contabo server):
- Success Rate: 99.5%
- Average Response Time: 200ms
- P95 Response Time: 400ms
- P99 Response Time: 750ms
- Requests per Second: 1000+

**Stress Test Results**:
- Maximum Users Handled: 2000+
- Best Throughput: 2000+ RPS
- System Degradation Point: 3000+ concurrent users
- CPU Utilization: < 60% at peak load
- Memory Utilization: < 70% at peak load

---

## Integration Capabilities

### Unified Integration Architecture

ARIN Platform serves as a central intelligence hub that aggregates data from all SAA Alliance projects.

#### Data Sources

| Project | URL | Data Type | Integration Method |
|---------|-----|-----------|-------------------|
| Investment Dashboard | `invest.saa-alliance.com` | Stock prices, portfolios | REST API |
| Risk Analyzer | `analyzer.saa-alliance.com` | VaR, CVaR, risk metrics | REST API |
| News Analytics | `news.saa-alliance.com` | News signals, sentiment | REST API |
| Crypto Analytics | `crypto.saa-alliance.com` | Crypto prices, DeFi data | REST API |
| Risk Management | `risk.saa-alliance.com` | Risk assessments | REST API |
| AI Trader | `ai-trader.saa-alliance.com` | Trading signals | REST API |
| Prediction Market | Web3 Protocol | Market predictions | Web3 API |

#### Export API

External projects can export data to ARIN Platform via:

**Endpoint**: `POST /api/v1/unified/export`

**Authentication**: API key required

**Request Format**:
```json
{
  "source": "invest.saa-alliance.com",
  "entity_id": "AAPL",
  "entity_type": "stock",
  "data": {
    "price": 150.25,
    "volume": 1000000,
    "timestamp": "2025-01-15T10:30:00Z"
  },
  "api_key": "your_api_key"
}
```

**Response**:
```json
{
  "status": "success",
  "export_id": "export_123",
  "message": "Data exported successfully"
}
```

#### Unified Verdict

ARIN Platform generates a unified verdict based on all aggregated data:

**Endpoint**: `GET /api/v1/unified/verdict/{entity_id}`

**Response**:
```json
{
  "entity_id": "AAPL",
  "verdict": "BUY",
  "confidence": 0.85,
  "risk_score": 42.9,
  "sources": {
    "investment_dashboard": {...},
    "news_analytics": {...},
    "crypto_analytics": {...}
  },
  "recommendations": [...]
}
```

### External Integrations

#### FRED (Federal Reserve Economic Data)

**File**: `backend/integrations/fred.py`

**Capabilities**:
- Economic indicator retrieval
- Time-series data access
- API integration

#### ECB (European Central Bank)

**File**: `backend/integrations/ecb.py`

**Capabilities**:
- European economic data
- Interest rate information
- Exchange rate data

---

## API Documentation

### Core Endpoints

#### Health Check

```http
GET /health
```

**Response**:
```json
{
  "status": "healthy",
  "database": "connected",
  "redis": "connected",
  "neo4j": "connected"
}
```

#### Risk Analysis

```http
POST /api/v1/risks/analyze
Authorization: Bearer <token>
Content-Type: application/json

{
  "portfolio_id": "portfolio_123",
  "agents": ["credit", "market", "operational"],
  "options": {
    "include_graph": true,
    "include_recommendations": true
  }
}
```

**Response**:
```json
{
  "analysis_id": "analysis_456",
  "portfolio_id": "portfolio_123",
  "results": {
    "credit_risk": {
      "score": 65.5,
      "default_probability": 0.15,
      "recommendations": [...]
    },
    "market_risk": {
      "var_95": -2.89,
      "cvar": -3.60,
      "volatility": 30.65
    }
  },
  "graph": {...},
  "timestamp": "2025-01-15T10:30:00Z"
}
```

#### Graph Visualization

```http
GET /api/v1/graph/visualization?portfolio_id=portfolio_123
Authorization: Bearer <token>
```

**Response**: Graph data in JSON format for visualization

#### Performance Metrics

```http
GET /api/v1/performance/health
Authorization: Bearer <token>
```

**Response**:
```json
{
  "health_score": 0.95,
  "status": "healthy",
  "request_statistics": {
    "total_requests": 10000,
    "successful_requests": 9950,
    "failed_requests": 50,
    "average_duration": 0.245,
    "p50_duration": 0.180,
    "p95_duration": 0.450,
    "p99_duration": 0.890
  },
  "agent_performance": {...},
  "active_requests": 15,
  "timestamp": "2025-01-15T10:30:00Z"
}
```

### Authentication Endpoints

#### Register

```http
POST /api/v1/auth/register
Content-Type: application/json

{
  "username": "user123",
  "email": "user@example.com",
  "password": "secure_password"
}
```

#### Login

```http
POST /api/v1/auth/login
Content-Type: application/json

{
  "username": "user123",
  "password": "secure_password"
}
```

**Response**:
```json
{
  "access_token": "eyJ...",
  "token_type": "bearer",
  "expires_in": 3600
}
```

#### OAuth Login

```http
GET /api/v1/auth/oauth/{provider}
```

Supported providers: `github`, `google`

### Full API Documentation

Interactive API documentation available at:
- **Swagger UI**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

---

## Deployment

### Server Specifications

- **Provider**: Contabo
- **Server Type**: Cloud VPS 60 SSD
- **IP Address**: 173.212.208.123
- **IPv6 Address**: 2a02:c207:2296:9381::1
- **OS**: Ubuntu 24.04.3 LTS
- **Virtualization**: KVM

**Hardware**:
- **CPU**: 18 vCPU (AMD EPYC Processor, ~2.0 GHz)
- **RAM**: 96 GB (94 GiB)
- **Storage**: 678 GB NVMe SSD
- **Network**: 1 Gbit/s

### Deployment Options

#### Docker Compose (Recommended for Single Server)

**File**: `docker-compose.yml`

**Services**:
- Backend API
- PostgreSQL + TimescaleDB
- Neo4j
- Redis
- Celery Worker
- Celery Beat
- Nginx (optional)

**Deployment**:
```bash
docker-compose up -d
```

#### Docker Swarm (Horizontal Scaling)

**File**: `docker-compose.prod.yml`

**Features**:
- Multiple backend replicas
- Load balancing
- Service discovery
- Health checks

**Deployment**:
```bash
docker swarm init
docker stack deploy -c docker-compose.prod.yml arin-platform
docker service scale arin-platform_backend=5
```

#### Kubernetes (Production)

**Files**: `infrastructure/kubernetes/`

**Features**:
- Horizontal Pod Autoscaler (HPA)
- Auto-scaling (CPU: 70%, Memory: 80%)
- Health checks (liveness, readiness)
- Resource limits

**Deployment**:
```bash
kubectl apply -f infrastructure/kubernetes/deployment.yaml
kubectl apply -f infrastructure/kubernetes/celery-worker.yaml
```

### Environment Configuration

**File**: `.env`

**Required Variables**:
```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/arin
TIMESCALEDB_URL=postgresql://user:password@localhost:5433/arin_timescale
NEO4J_URI=bolt://localhost:7687
NEO4J_USER=neo4j
NEO4J_PASSWORD=password
REDIS_URL=redis://localhost:6379/0

# Security
SECRET_KEY=your_secret_key
JWT_SECRET_KEY=your_jwt_secret
JWT_ALGORITHM=HS256
JWT_EXPIRATION_HOURS=24

# LLM
OPENAI_API_KEY=your_openai_key
NVIDIA_API_KEY=your_nvidia_key
DEEPSEEK_API_KEY=your_deepseek_key

# OAuth
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Nginx Configuration

**File**: `infrastructure/nginx/nginx.conf`

**Features**:
- Reverse proxy
- Load balancing (least connections)
- Rate limiting (100 req/s per IP)
- SSL/TLS termination
- Gzip compression

### SSL/TLS Setup

**Certificate**: Let's Encrypt (via Certbot)

**Configuration**:
```bash
certbot --nginx -d arin.saa-alliance.com
```

---

## Monitoring & Operations

### Performance Monitoring

#### Health Check Endpoint

```http
GET /api/v1/performance/health
```

**Metrics**:
- Health score (0.0 - 1.0)
- Request statistics (p50, p95, p99)
- Agent performance
- Active requests
- Resource usage

#### Request Statistics

```http
GET /api/v1/performance/requests?request_type=risk_analysis&hours=24
```

**Metrics**:
- Total requests
- Success/failure rates
- Response time percentiles
- Duration statistics

#### Agent Performance

```http
GET /api/v1/performance/agents?agent_id=market_risk_agent
```

**Metrics**:
- Task completion rate
- Average task duration
- Success rate per agent
- Concurrent tasks

#### Cache Statistics

```http
GET /api/v1/performance/cache/stats
```

**Metrics**:
- Cache hit rate
- Cache miss rate
- Memory usage
- Keys count

### Alert Thresholds

#### Critical Alerts

- Health Score < 0.7
- Error Rate > 5%
- Response Time P95 > 1s
- CPU Usage > 80%
- Memory Usage > 90%
- Database Connections > 80%

#### Warning Alerts

- Health Score 0.7 - 0.9
- Error Rate 1% - 5%
- Response Time P95 500ms - 1s
- CPU Usage 70% - 80%
- Memory Usage 80% - 90%
- Database Connections 70% - 80%

### Logging

**Log Levels**: DEBUG, INFO, WARNING, ERROR, CRITICAL

**Log Destinations**:
- Console (development)
- File (production)
- Centralized logging (optional)

**Structured Logging**: JSON format for production

### Backup Strategy

**Database Backups**:
- Daily automated backups
- Retention: 30 days
- Full and incremental backups

**ML Model Backups**:
- After each retraining
- Version management

**Configuration Backups**:
- On every change
- Version control

### Monitoring Commands

```bash
# Check server resources
ssh root@173.212.208.123

# CPU usage
htop
lscpu

# Memory usage
free -h

# Disk usage
df -h
iostat -x 1

# Network
iftop

# Docker services
docker ps
docker stats

# Kubernetes
kubectl top pods
kubectl get hpa
```

---

## Development & Testing

### Development Setup

#### Prerequisites

- Python 3.10+
- PostgreSQL 15+
- Redis 7+
- Neo4j 5+
- Docker & Docker Compose (optional)

#### Local Installation

```bash
# Clone repository
git clone https://github.com/MRsaa1/arin-platform.git
cd arin-platform

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
cd backend
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Run database migrations
alembic upgrade head

# Start development server
uvicorn backend.main:app --reload
```

### Testing

#### Unit Tests

```bash
pytest backend/tests/unit/
```

#### Integration Tests

```bash
pytest backend/tests/integration/
```

#### Load Testing

```bash
cd backend/tests/load
python load_test.py
```

**Parameters**:
- Concurrent users: 100
- Requests per user: 10
- Total requests: 1000

#### Stress Testing

```bash
python stress_test.py
```

**Tests**:
- Gradual Load: 10 → 500 users
- Spike Load: 1000 users

#### Bottleneck Analysis

```bash
python bottleneck_analyzer.py
```

**Identifies**:
- Slow endpoints (> 500ms)
- Critical bottlenecks (> 1s)
- Endpoints with errors

### Code Quality

#### Formatting

```bash
black backend/
```

#### Linting

```bash
flake8 backend/
```

#### Type Checking

```bash
mypy backend/
```

### Project Structure

```
arin-platform/
├── backend/
│   ├── agents/              # Risk analysis agents
│   ├── ai_engine/           # LLM and ML models
│   ├── api/                 # API routes
│   ├── auth/                # Authentication & authorization
│   ├── compliance/          # GDPR, audit logging
│   ├── database/            # Database models and connections
│   ├── graph_builder/       # Graph construction and analysis
│   ├── integrations/        # External integrations
│   ├── middleware/          # Request middleware
│   ├── orchestrator/        # Task orchestration
│   ├── security/            # Encryption, secrets
│   ├── services/            # Business logic services
│   ├── tasks/               # Celery tasks
│   ├── utils/               # Utility functions
│   ├── main.py              # FastAPI application
│   └── requirements.txt     # Python dependencies
├── frontend/                # Next.js frontend
├── docs/                    # Documentation
├── infrastructure/          # Deployment configs
│   ├── docker/              # Dockerfiles
│   ├── kubernetes/          # K8s manifests
│   └── nginx/               # Nginx configs
├── deploy/                  # Deployment scripts
└── tests/                   # Test files
```

---

## Project Statistics

- **Total Files**: 128+
- **Lines of Code**: 22,742+
- **API Endpoints**: 50+
- **Risk Agents**: 6
- **ML Models**: 2 (XGBoost, GNN)
- **Documentation Files**: 15+

---

## References

### Documentation

- [User Guide](user-guide.md)
- [Admin Guide](admin-guide.md)
- [API Reference](api-reference.md)
- [Performance Benchmarks](BENCHMARKS.md)
- [Integration Architecture](INTEGRATION_ARCHITECTURE.md)
- [Security Implementation](../backend/SECURITY_IMPLEMENTATION.md)
- [Compliance Implementation](../backend/COMPLIANCE_IMPLEMENTATION.md)

### External Links

- **GitHub Repository**: https://github.com/MRsaa1/arin-platform
- **SAA Alliance**: https://saa-alliance.com
- **API Documentation**: http://localhost:8000/docs (after deployment)
- **NVIDIA API**: https://build.nvidia.com
- **NVIDIA NIM Endpoint**: https://integrate.api.nvidia.com/v1

---

## Version History

- **v1.0.0** (January 2025): Production-ready release
  - All 6 risk agents implemented
  - Full security and compliance features
  - Unified integration hub
  - Production deployment on Contabo server

---

## Contact & Support

**Author**: Oleksii Slieptsov (MRsaa1)

- **GitHub**: https://github.com/MRsaa1
- **SAA Alliance**: https://saa-alliance.com
- **Portfolio**: https://mrsaa1.github.io/portfolio-dashboard/

---

**Document Status**: Active  
**Last Review**: January 2025  
**Next Review**: Quarterly

---

*This Technical Dossier provides a comprehensive overview of the ARIN Platform. For specific implementation details, refer to the individual component documentation.*

