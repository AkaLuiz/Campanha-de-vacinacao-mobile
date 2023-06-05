import React, {useState} from 'react';

import {Text, View, TouchableOpacity} from 'react-native';

const CustomSwitch = ({
  selectionMode,
  roundCorner,
  option1,
  option2,
  onSelectSwitch,
  selectionColor
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const [getRoundCorner, setRoundCorner] = useState(roundCorner);

  const updatedSwitchData = val => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };

  return (
    <View
    style={{
      position: "absolute",
      top: "5%",
      }}
    >
      <View
        style={{
          height: "140%",
          width: "110%",
          backgroundColor: '#D9D9D9',
          borderRadius: getRoundCorner ? 25 : 0,
          borderWidth: 2,
          borderColor: selectionColor,
          flexDirection: 'row',
          justifyContent: "center",
          padding: 2,
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(1)}
          style={{
            flex: 1,

            backgroundColor: getSelectionMode == 1 ? selectionColor : '#D9D9D9',
            borderRadius: getRoundCorner ? 25 : 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: "InterRegular",
              color: getSelectionMode == 1 ? '#D9D9D9' : selectionColor,
            }}>
            {option1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(2)}
          style={{
            flex: 1,

            backgroundColor: getSelectionMode == 2 ? selectionColor : '#D9D9D9',
            borderRadius: getRoundCorner ? 25 : 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
                fontFamily: "InterRegular",
              color: getSelectionMode == 2 ? '#D9D9D9' : selectionColor,
            }}>
            {option2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CustomSwitch;