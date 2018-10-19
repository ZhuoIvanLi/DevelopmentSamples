export const ADD_FLASH_MESSGAE = 'ADD_FLASH_MESSAGE'

export const addFlashMessage = (message) => {
    return {
        type: ADD_FLASH_MESSGAE,
        message
    }
} 