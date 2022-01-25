import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  ChangeTextReducer,
} from "./counterSlice";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Input } from "react-native-elements";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (

    <View>

      <Button

        onPress={() => dispatch(decrement())}
        title={"-"}
      >
        -
      </Button>
      <Text>{count}</Text>
      <Button
        onPress={() => dispatch(increment())}
        title={"+"}
      >
        +
      </Button>

      <Button
        onPress={() => dispatch(incrementByAmount(incrementValue))}
        title={"Add Amount"}
      >
        Add Amount
      </Button>
      <Button
        onPress={() => dispatch(incrementAsync(incrementValue))}
        title={"Add Async"}

      >
        Add Async
      </Button>
      <Button
        onPress={() => dispatch(incrementIfOdd(incrementValue))}
        title={"Add If Odd"}

      >
        Add If Odd
      </Button>

      {/*<TextInput value={incrementAmount} onChangeText={(e) => setIncrementAmount(e)}>*/}
      {/*</TextInput>*/}
      <Input
        placeholder='INPUT WITH ICON'
        leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
        onChangeText={(txt) => setIncrementAmount(txt)}
      />
    </View>


  )
    ;
}
