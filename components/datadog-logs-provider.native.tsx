import {
  DatadogProvider,
  DatadogProviderConfiguration,
  SdkVerbosity
} from 'expo-datadog';
import type { PropsWithChildren } from 'react';

const config = new DatadogProviderConfiguration(
  'pub658f7d4e146ff4a483d9099ddbbe8ecd',
  'local',
  undefined,
  {
    site: 'US1',
    logsConfiguration: {}
  }
);

config.verbosity = SdkVerbosity.INFO;

export default function DatadogLogsWrapper({ children }: PropsWithChildren) {
  return <DatadogProvider configuration={config}>{children}</DatadogProvider>;
}
