import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { mixCards, flipCards } from 'src/redux/actions'
import Card from 'src/components/Card'
import styled from 'styled-components'

const GameBoard = ({ mixCards, cards, flipCards }) => {
  useEffect(() => {
    mixCards()
  }, [mixCards])

  return (
    <Root>
      {cards.map((card, index) => (
        <Card flipCards={flipCards} card={card} key={index} />
      ))}
    </Root>
  )
}
const mapStateToProps = (state) => ({
  cards: state.cards,
})

export default connect(mapStateToProps, { mixCards, flipCards })(GameBoard)

const Root = styled.div`
  width: 650px;
  display: flex;
  flex-wrap: wrap;
  user-select: none;
`
