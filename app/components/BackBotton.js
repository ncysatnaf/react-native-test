import React, { StyleSheet, Image } from 'react-native'

export class BackButton extends React.Component {
  render() {
    return (
      <Image source={require('../../assets/search.png')} style={styles.backButton} />
    )
  }
}

const styles = StyleSheet.create({
  backButton: {
    width: 10,
    height: 17,
    marginLeft: 10,
    marginTop: 3,
    marginRight: 10,
    },
})

export default BackButton