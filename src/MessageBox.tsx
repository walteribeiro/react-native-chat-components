import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';

export default function MessageBox(props) {
  const positionCls = [
    S.rceMbox,
    props.position === 'right' && S.rceMboxRight,
  ];

  const thatAbsoluteTime = props.type !== 'text' && props.type !== 'file' && !(props.type === 'location' && props.text);

  return (
    <View
      style={S.rceContainerMbox}
      onClick={props.onClick}>
      {
        props.type === 'system'
        ? null
        : <View
          style={[
            positionCls,
          ]}>
          <View
            style={S.rceMboxBody}>
            {
              (props.title || props.avatar) &&
              <View
                style={[
                  S.rceMboxTitle,
                  props.type === 'text' && S.rceMboxTitleClear,
                ]}
                onClick={props.onTitleClick}>
                <View>
                  {
                    props.title &&
                    <Text
                      style={[
                        S.rceMboxTitleText,
                        props.titleColor && { color: props.titleColor },
                      ]}>{props.title}</Text>
                  }
                </View>
              </View>
            }

            {
              props.type === 'text' &&
              <Text
                style={S.rceMboxText}>
                {props.text}
                {'\t\t\t\t\t'}
              </Text>
            }

            <View
              style={[
                S.rceMboxTime,
                thatAbsoluteTime && S.rceMboxTimeBlock
              ]}>
              <Text
                style={S.rceMboxTimeText}>
                {
                  props.date &&
                  !isNaN(props.date) &&
                  (
                    props.dateString
                  )
                }
              </Text>
              {
                props.status &&
                <Text
                  style={S.rceMboxStatus}>
                  {
                    props.status === 'waiting' &&
                    <IconM name='access-time' size={13}/>
                  }

                  {
                    props.status === 'sent' &&
                    <IconM name='check' size={13}/>
                  }

                  {
                    props.status === 'received' &&
                    <IconI name='md-done-all' size={13}/>
                  }

                  {
                    props.status === 'read' &&
                    <IconI name='md-done-all' color='#4FC3F7' size={13}/>
                  }
                </Text>
              }
            </View>
          </View>
        </View>
      }
    </View>
  )
}

const S = StyleSheet.create({
  rceContainerMbox: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    minWidth: 200,
  },
  rceMbox: {
    backgroundColor: 'white',
    borderRadius: 5,
    // boxShadow: 1px 1px 1px 1px rgba(0, 0, 0, .2),
    borderTopLeftRadius: 0,
    marginLeft: 20,
    marginRight: 5,
    marginTop: 3,
    flexDirection: 'column',
    marginBottom: 3,
    paddingTop: 7,
    paddingLeft: 9,
    paddingBottom: 8,
    paddingRight: 9,
    minWidth: 140,
  },
  rceMboxBody: {
    margin: 0,
    padding: 0,
    position: 'relative',
  },
  rceMboxRight: {
    marginLeft: 5,
    marginRight: 20,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 5,
  },
  rceMboxText: {
    fontSize: 13.6,
  },
  rceMboxTime: {
    position: 'absolute',
    right: -4,
    bottom: -5,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  rceMboxTimeText: {
    textAlign: 'right',
    color: '#777',
    fontSize: 12,
  },
  rceMboxTimeBlock: {
    /*position: relative,*/
    right: 0,
    bottom: 0,
    left: 0,
    marginRight: -6,
    marginLeft: -6,
    paddingTop: 5,
    paddingRight: 3,
    paddingBottom: 2,
    // backgroundColor: linear-gradient(to top, rgba(0,0,0,0.33), transparent),
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  rceMboxClearPadding: {
    paddingBottom: 3,
  },
  rceMboxRceMboxClearNotch: {
    borderRadius: 5,
  },
  rceMboxTitle: {
    margin: 0,
    marginBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rceMboxTitleAvatar: {
    display: 'flex',
    marginRight: 5,
  },
  rceMboxTitleText: {
    fontWeight: '500',
    fontSize: 13,
    color: '#4f81a1',
  },
  rceMboxTitleClear: {
    marginBottom: 5,
  },
  rceMboxStatus: {
    textAlign: 'right',
    marginLeft: 3,
    color: '#999'
  },
  rceMboxTitleRceAvatarContainer: {
    marginRight: 5,
  },
});
