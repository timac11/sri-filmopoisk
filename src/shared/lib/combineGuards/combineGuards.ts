import { TRouteGuard } from '@shared/types/router/routerConfig.ts';

export const combineGuards = <P>(
  Component: React.ComponentType<P>,
  guards: TRouteGuard<P>[],
): React.ComponentType<P> => {
  return guards.reduceRight((acc, nextGuard) => {
    return nextGuard(acc);
  }, Component);
};
