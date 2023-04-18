import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { ChartTest } from './src/screens';
import { SafeAreaView } from 'react-native';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export default function App() {
  const [isFontsLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginLeft: 12, marginRight: 12 }}>
        <ChartTest />
      </SafeAreaView>
    </>
  );
}
