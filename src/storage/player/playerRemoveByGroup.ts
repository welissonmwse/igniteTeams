import AsyncStorage from '@react-native-async-storage/async-storage'

import { PLAYER_COLLECTION } from '@storage/storageConfig'

import { playersGetByGroup } from './playersGetByGroup'

export async function PlayerRemoveByGroup( playerNeme: string, group: string) {
  try {
    const storage = await playersGetByGroup(group)

    const filtered = storage.filter(player => player.name !== playerNeme)

    const players = JSON.stringify(filtered)

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players)

  } catch (error) {
    console.log(error)
    throw error
  }
}
