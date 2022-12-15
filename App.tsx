import {ThemeProvider} from 'styled-components'
// import { Group } from "@screens/Groups"
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import theme from '@theme/index'
import { Loading } from '@components/Loading'
import { StatusBar } from 'react-native'
import { NewGroup } from '@screens/NewGroup'

export default function App() {

  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <NewGroup/> : <Loading />}
    </ThemeProvider>
  )
}
