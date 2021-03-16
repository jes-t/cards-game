import {
  MIX_CARDS,
  FLIP_CARD,
  SET_FLIPPED_CARD,
  REMOVE_LISTENER,
  UNFLIP_CARD,
  RESET_BOARD,
  SET_LOCK_BOARD,
  SET_FIRST_CARD,
  RESET_GAME,
  SET_MATCHED_PAIRS,
} from 'src/redux/types'
import cheetah from 'src/assets/img/cheetah.png'
import deer from 'src/assets/img/deer.png'
import fox from 'src/assets/img/fox.png'
import lion from 'src/assets/img/lion.png'
import dog from 'src/assets/img/dog.png'
import redPanda from 'src/assets/img/redPanda.png'
import wolf from 'src/assets/img/wolf.png'
import yalk from 'src/assets/img/yalk.png'

const initialState = {
  cards: [
    {
      id: 0,
      type: 'cheetah',
      flipped: false,
      order: '',
      onListen: true,
      uri: cheetah,
    },
    {
      id: 1,
      type: 'cheetah',
      flipped: false,
      order: '',
      onListen: true,
      uri: cheetah,
    },
    {
      id: 2,
      type: 'deer',
      flipped: false,
      order: '',
      onListen: true,
      uri: deer,
    },
    {
      id: 3,
      type: 'deer',
      flipped: false,
      order: '',
      onListen: true,
      uri: deer,
    },
    {
      id: 4,
      type: 'fox',
      flipped: false,
      order: '',
      onListen: true,
      uri: fox,
    },
    {
      id: 5,
      type: 'fox',
      flipped: false,
      order: '',
      onListen: true,
      uri: fox,
    },
    {
      id: 6,
      type: 'lion',
      flipped: false,
      order: '',
      onListen: true,
      uri: lion,
    },
    {
      id: 7,
      type: 'lion',
      flipped: false,
      order: '',
      onListen: true,
      uri: lion,
    },
    {
      id: 8,
      type: 'dog',
      flipped: false,
      order: '',
      onListen: true,
      uri: dog,
    },
    {
      id: 9,
      type: 'dog',
      flipped: false,
      order: '',
      onListen: true,
      uri: dog,
    },
    {
      id: 10,
      type: 'redPanda',
      flipped: false,
      order: '',
      onListen: true,
      uri: redPanda,
    },
    {
      id: 11,
      type: 'redPanda',
      flipped: false,
      order: '',
      onListen: true,
      uri: redPanda,
    },
    {
      id: 12,
      type: 'wolf',
      flipped: false,
      order: '',
      onListen: true,
      uri: wolf,
    },
    {
      id: 13,
      type: 'wolf',
      flipped: false,
      order: '',
      onListen: true,
      uri: wolf,
    },
    {
      id: 14,
      type: 'yalk',
      flipped: false,
      order: '',
      onListen: true,
      uri: yalk,
    },
    {
      id: 15,
      type: 'yalk',
      flipped: false,
      order: '',
      onListen: true,
      uri: yalk,
    },
  ],
  hasFlippedCard: false,
  lockBoard: false,
  firstCard: null,
  gameIsResetting: false,
  matchedPairs: 0,
  numberOfCards: 16,
}

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case MIX_CARDS: {
      const cardsWithRandomPos = state.cards.map((card) => {
        return {
          ...card,
          onListen: true,
          order: Math.floor(Math.random() * state.numberOfCards),
        }
      })

      return {
        ...state,
        cards: cardsWithRandomPos,
        gameIsResetting: false,
        matchedPairs: 0,
      }
    }

    case FLIP_CARD: {
      const cards = state.cards.map((card) => {
        if (card.id === action.id) {
          return { ...card, flipped: true }
        }
        return card
      })
      return { ...state, cards }
    }

    case UNFLIP_CARD: {
      const cards = state.cards.map((card) => {
        if (card.id === action.id) {
          return { ...card, flipped: false }
        }
        return card
      })
      return { ...state, cards }
    }

    case SET_FLIPPED_CARD: {
      return { ...state, hasFlippedCard: action.hasFlippedCard }
    }

    case SET_MATCHED_PAIRS: {
      return { ...state, matchedPairs: action.matchedPairs }
    }

    case REMOVE_LISTENER: {
      const cards = state.cards.map((card) => {
        if (card.id === action.id) {
          return { ...card, onListen: false }
        }
        return card
      })
      return { ...state, cards }
    }

    case RESET_BOARD: {
      return {
        ...state,
        hasFlippedCard: false,
        lockBoard: false,
        firstCard: null,
      }
    }
    case RESET_GAME: {
      const resetCards = state.cards.map((card) => {
        return {
          ...card,
          flipped: false,
          onListen: false,
        }
      })
      return {
        ...initialState,
        lockBoard: true,
        gameIsResetting: true,
        cards: resetCards,
      }
    }

    case SET_LOCK_BOARD: {
      return { ...state, lockBoard: action.lockBoardState }
    }

    case SET_FIRST_CARD: {
      return { ...state, firstCard: action.id }
    }

    default:
      return state
  }
}
