import {ThemeProvider} from 'styled-components';
import { Group } from "@screens/Groups";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import theme from '@theme/index'
import { ActivityIndicator, View } from 'react-native';

export default function App() {

  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? 
        <Group/> : 
        <View style={{backgroundColor: theme.COLORS.GRAY_600, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator
            color={theme.COLORS.GREEN_700} 
            size="large"
          />
        </View>
      }
      
    </ThemeProvider>
  );
}

