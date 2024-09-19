import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import theme from '../theme/Colors';
import Box from './Box';
import Button from './Button';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const handleCheck = index => {
    console.log('dabba', index);
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    checkWinner(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  };

  const checkWinner = board => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.Row}>
          {board.map((value, index) => (
            <Box key={index} value={value} onPress={() => handleCheck(index)} />
          ))}
        </View>
        <Button
          title="Reset"
          onPress={resetGame}
          height={verticalScale(40)}
          width={scale(100)}
          backgroundColor={theme.white}
          radius={scale(4)}
          padding={scale(2)}
        />
      </View>
    </>
  );
};

export default Board;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.primary,
    width: '80%',
    borderRadius: moderateScale(5),
    padding: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  Row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
