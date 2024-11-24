/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const DiscoverLazyImport = createFileRoute('/discover')()
const DashboardLazyImport = createFileRoute('/dashboard')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const DiscoverLazyRoute = DiscoverLazyImport.update({
  id: '/discover',
  path: '/discover',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/discover.lazy').then((d) => d.Route))

const DashboardLazyRoute = DashboardLazyImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/dashboard.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardLazyImport
      parentRoute: typeof rootRoute
    }
    '/discover': {
      id: '/discover'
      path: '/discover'
      fullPath: '/discover'
      preLoaderRoute: typeof DiscoverLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/dashboard': typeof DashboardLazyRoute
  '/discover': typeof DiscoverLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/dashboard': typeof DashboardLazyRoute
  '/discover': typeof DiscoverLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/dashboard': typeof DashboardLazyRoute
  '/discover': typeof DiscoverLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/dashboard' | '/discover'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/dashboard' | '/discover'
  id: '__root__' | '/' | '/dashboard' | '/discover'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  DashboardLazyRoute: typeof DashboardLazyRoute
  DiscoverLazyRoute: typeof DiscoverLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  DashboardLazyRoute: DashboardLazyRoute,
  DiscoverLazyRoute: DiscoverLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dashboard",
        "/discover"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard.lazy.tsx"
    },
    "/discover": {
      "filePath": "discover.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
