import AsyncStorage from '@react-native-async-storage/async-storage'

import { AppError } from '@utils/AppError'
import { PLAYER_COLLECTION } from '@storage/storageConfig'

import { PlayerStorageDTO } from './PlayerStorageDTO'
import { playerGetByGroup } from './playersGetByGroup'

export async function PlayerAddByGroup( newPlayer: PlayerStorageDTO, group: string) {
  try {
    const storedPlayers = await playerGetByGroup(group)

    const playerAlreadyExists = storedPlayers.filter(player => player.name === newPlayer.name)

    if(playerAlreadyExists.length > 0){
      throw new AppError('Já existe um jogador cadastrado com esse nome.')
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer])

    await AsyncStorage.setItem(PLAYER_COLLECTION, storage)
  } catch (error) {
    console.log(error)
    throw error
  }
}