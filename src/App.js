import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { resetGame } from 'src/redux/actions'
import GameBoard from 'src/components/GameBoard'
import styled from 'styled-components'
import spinner from 'src/assets/spinner.gif'

const App = ({ resetGame, gameIsResetting, matchedPairs, numberOfCards }) => {
  const [showWinnerModal, setShowWinnerModal] = useState(false)

  useEffect(() => {
    if (matchedPairs === numberOfCards / 2) {
      setShowWinnerModal(true)
    } else {
      setShowWinnerModal(false)
    }
  }, [matchedPairs, numberOfCards])

  return (
    <RootContainer>
      <div>
        <GameBoard />
      </div>
      <Button
        onClick={() => {
          resetGame()
        }}
        disabled={gameIsResetting}
      >
        {'New Game'}
        {gameIsResetting && <SpinnerForButton src={spinner} />}
      </Button>
      {showWinnerModal && (
        <>
          <LoadingShadow />
          <WinnerModal>
            <WinTitle>{"Congratulations! Let's play again?"}</WinTitle>
            <ButtonsContainer>
              <Button
                onClick={() => {
                  setShowWinnerModal(false)
                  resetGame()
                }}
              >
                Yes
              </Button>
              <Button
                onClick={() => {
                  setShowWinnerModal(false)
                }}
              >
                No
              </Button>
            </ButtonsContainer>
          </WinnerModal>
        </>
      )}
    </RootContainer>
  )
}

const mapStateToProps = (state) => ({
  gameIsResetting: state.gameIsResetting,
  matchedPairs: state.matchedPairs,
  numberOfCards: state.numberOfCards,
})

export default connect(mapStateToProps, {
  resetGame,
})(App)

const RootContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #f2f3f4;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 140px;
  border-radius: 8px;
  outline: 0;
  user-select: none;
  background-color: #fff;
  :disabled {
    background-color: #ccc;
  }
`
const LoadingShadow = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: black;
  opacity: 0.5;
`
const WinnerModal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 150px;
  background-color: white;
  border-radius: 20px;
`
const WinTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
  width: 100%;
`
const SpinnerForButton = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`
