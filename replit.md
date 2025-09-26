# Overview

Pw Check is a professional password strength analyzer web application designed to help users evaluate and improve their password security. The application provides compliance-based password evaluation against industry standards (NIST SP 800-63B, GDPR, ISO 27001, PCI DSS) while maintaining complete user privacy through client-side processing. Built as a consumer-focused tool, it includes password generation capabilities and educational content about security best practices.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui design system for accessible, customizable components
- **Styling**: Tailwind CSS with CSS variables for theming and responsive design
- **State Management**: TanStack Query for server state management and React hooks for local state
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Development Server**: Custom Vite integration for seamless full-stack development
- **Storage Interface**: Abstracted storage layer with in-memory implementation (ready for database integration)
- **API Design**: RESTful API structure with `/api` prefix routing

## Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema Definition**: Centralized schema in `shared/schema.ts` with Zod validation integration
- **Migration System**: Drizzle Kit for database schema migrations and version control
- **Database Provider**: Configured for Neon Database (PostgreSQL) with connection pooling

## Core Application Logic
- **Password Analysis**: Client-side password strength evaluation with entropy calculation, pattern detection, and common password checking
- **Compliance Checking**: Multi-standard compliance validation (NIST, GDPR, ISO27001, PCI-DSS) with detailed feedback
- **Password Generation**: Secure password generation with customizable character sets and exclusion options
- **Privacy-First Design**: All password processing occurs client-side to ensure user privacy

## Development and Build System
- **Type Safety**: Comprehensive TypeScript configuration with strict mode enabled
- **Code Organization**: Monorepo structure with shared types and utilities between client and server
- **Path Aliases**: Configured import aliases for clean code organization (`@/`, `@shared/`)
- **Development Tools**: Hot module replacement, error overlays, and Replit-specific development plugins

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **UI Library**: Radix UI primitives for accessible component foundations
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **State Management**: TanStack React Query for server state synchronization

## Backend Dependencies
- **Server Framework**: Express.js with TypeScript support (tsx)
- **Database**: Drizzle ORM with PostgreSQL driver (@neondatabase/serverless)
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Build Tools**: esbuild for server bundling, Vite for frontend builds

## Development Tools
- **Type System**: TypeScript with comprehensive type definitions
- **Code Quality**: ESLint configuration via Vite
- **Development Server**: Custom Vite middleware integration with Express
- **Database Tools**: Drizzle Kit for schema management and migrations

## Utility Libraries
- **Form Handling**: React Hook Form with Hookform Resolvers and Zod validation
- **UI Utilities**: Class Variance Authority for component variants, clsx for conditional classes
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date manipulation and formatting