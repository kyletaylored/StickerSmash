import {
  DatadogProvider,
  DatadogProviderConfiguration,
  PropagatorType,
  SdkVerbosity
} from 'expo-datadog';
import type { PropsWithChildren } from 'react';

import { ImagePrivacyLevel, SessionReplay, TextAndInputPrivacyLevel, TouchPrivacyLevel } from "@datadog/mobile-react-native-session-replay";

const config = new DatadogProviderConfiguration(
  'pub658f7d4e146ff4a483d9099ddbbe8ecd',
  'local',
  undefined,
  {
    site: 'US1',
    rumConfiguration: {
      applicationId: '8f9ed0ce-f23e-47e7-bd51-8eaeb0c585fb',
      trackInteractions: true,
      trackResources: true,
      trackErrors: true,
      sessionSampleRate: 100,
      nativeCrashReportEnabled: true,
      firstPartyHosts: [
        {
          match: 'datadog-sanity-vercel-demo-app.vercel.app',
          propagatorTypes: [
            PropagatorType.DATADOG,
            PropagatorType.TRACECONTEXT
          ]
        }
      ]
    },
    logsConfiguration: {},
    traceConfiguration: {}
  }
);

config.verbosity = SdkVerbosity.INFO;

SessionReplay.enable({
  replaySampleRate: 100, // The percentage of sampled replays, in the range 0.0 - 100.0 (Default: 100.0).
  textAndInputPrivacyLevel: TextAndInputPrivacyLevel.MASK_SENSITIVE_INPUTS, // Defines the way text and input (e.g text fields, checkboxes) should be masked (Default: `MASK_ALL`).
  imagePrivacyLevel: ImagePrivacyLevel.MASK_NONE, // Defines the way images should be masked (Default: `MASK_ALL`).
  touchPrivacyLevel: TouchPrivacyLevel.SHOW  // Defines the way user touches (e.g tap) should be masked (Default: `HIDE`).
});

export default function DatadogWrapper({ children }: PropsWithChildren) {
  return <DatadogProvider configuration={config}>{children}</DatadogProvider>;
}
