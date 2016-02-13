import React,{
  StyleSheet,
	View,
	Text,
  Image,
  ListView,
  TouchableHighlight,
  Dimensions,
  ScrollView
} from 'react-native'

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

export class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {items} = this.props
    console.log(items)

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    let dataSource = ds.cloneWithRows(items)
    console.log(dataSource.rowIdentities)
    return (
      <View style={styles.view}>
        <ListView 
          dataSource={dataSource}
          renderRow={(goods) => {
            return (
              <View style={styles.container}>
                <View >
                  <View style={styles.top}>
                    <View style={styles.price_box}>
                      <Text style={styles.price}>
                        ￥{goods.price}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.content}>
                    <ScrollView
                      style={[styles.scrollView, styles.horizontalScrollView]}
                      contentContainerStyle={styles.contentContainer}
                      horizontal={true}
                      showsVerticalScrollIndicator={true}>
                      <Image
                        style={styles.img}
                        source={{uri: goods.img}} />
                      <Image
                        style={styles.img}
                        source={{uri: goods.img}} />
                      <Image
                        style={styles.img}
                        source={{uri: goods.img}} />
                      <Image
                        style={styles.img}
                        source={{uri: goods.img}} />
                      <Image
                        style={styles.img}
                        source={{uri: goods.img}} />
                    </ScrollView>
                  </View>
                  <View>
                    <Text style={styles.title}>
                      {goods.title}
                    </Text>
                  </View>
                </View>
              </View>
            )
          }}/>
      </View>

    )
  }
}

let styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#6A85B1',
    height: 100,
  },
  horizontalScrollView: {
    height: 100,
  },
  view:{
    width: deviceWidth,
    backgroundColor: '#e8eced',
    flex: 1,
    alignItems: 'center',
  },
  container:{
    marginBottom: 5,
    marginTop: 5,
    flex: 1,
    backgroundColor: '#FFF',
    width: deviceWidth - 20,
    height: 200,
    paddingTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#d3d9de',
    borderRightWidth: 1,
    borderRightColor: '#d3d9de',
    borderLeftWidth: 1,
    borderLeftColor: '#d3d9de',

  },
  title: {
    color: '#2c3e50',
    marginLeft: 10,
    marginTop: 10
  },
  top: {
    height: 40
  },
  price: {
    fontSize: 16,
    color: '#e74c3c',
    marginRight: 8
  },
  price_box:{
    backgroundColor: '#f4f4f4',
    borderLeftWidth: 8,
    borderLeftColor: '#f4f4f4',
    alignSelf: 'flex-end',
    borderRadius: 2
  },
  img: {
    width: 100,
    height: 100,
    marginRight: 10
  },
  content: {
    flexDirection: 'row',
    flex: 1
  },
  contentContainer: {
    flex: 1,
    height: 100,
  },
  scrollView: {
    flex: 1
  }
})
export default Home