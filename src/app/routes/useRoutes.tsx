import { useMemo } from 'react';
import { Route } from 'react-router-dom';
import { IRouteConfig, TRouterConfig } from '@shared/types/router/routerConfig.ts';
import { combineGuards } from '@shared/lib/combineGuards/combineGuards.ts';

export const useRoutes = <Path extends string, PageId extends string>(
  routerConfig: TRouterConfig<Path, PageId>,
) => {
  return useMemo(() => {
    const routeConfigs: IRouteConfig<Path, PageId>[] =
      Object.values<IRouteConfig<Path, PageId>>(routerConfig);
    return routeConfigs.map(({ Component, guards, ...route }) => {
      const ComponentWithGuards = guards ? combineGuards(Component, guards) : Component;
      return (
        <Route
          key={route.path}
          path={route.parameter ? `${route.path}/:${route.parameter}` : route.path}
          element={<ComponentWithGuards />}
        />
      );
    });
  }, [routerConfig]);
};
