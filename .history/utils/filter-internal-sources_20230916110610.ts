import { Source } from '@app/types/document';

const filterInternalSources = (sources: Source[]) => {
  return (sources || [])?.filter(
    (each) =>
      !each?.source_url?.includes('') &&
      !each?.source_url?.includes('minio:9000')
  );
};

export default filterInternalSources;
