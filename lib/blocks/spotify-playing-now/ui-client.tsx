import { FunctionComponent, Suspense } from 'react';

import { CoreBlock } from '@/components/CoreBlock';

import { Skeleton } from '@/components/ui/skeleton';

import { BlockProps } from '../ui';
import { SpotifyLogo, SpotifyPlayingNowServerUI } from './ui-server';

export const SpotifyPlayingNow: FunctionComponent<BlockProps> = ({
  pageId,
  ...otherProps
}) => {
  return (
    <CoreBlock
      pageId={pageId}
      className="bg-gradient-to-tr from-[#0A0B0D] to-[#402650]"
      {...otherProps}
    >
      <Suspense fallback={<LoadingState />}>
        <SpotifyPlayingNowServerUI pageId={pageId} />
      </Suspense>
    </CoreBlock>
  );
};

export const LoadingState = () => {
  return (
    <div className="flex gap-3">
      <Skeleton className="w-16 h-16 rounded-xl bg-white/10" />

      <div className="flex flex-col justify-center gap-3">
        <Skeleton className="h-4 w-[250px] bg-white/10" />
        <Skeleton className="h-3 w-[200px] bg-white/10" />
      </div>
      <SpotifyLogo />
    </div>
  );
};

export default SpotifyPlayingNow;