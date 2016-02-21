import React,{
  StyleSheet,
	View,
	Text,
  Image,
  ListView,
  TouchableHighlight,
  Dimensions,
  ScrollView,
  ProgressBarAndroid
} from 'react-native'

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

import { handleOptionChange } from '../actions/index'
export class Goods extends React.Component {
  constructor(props) {
    super(props)

    this.onEndReached = this.onEndReached.bind(this)
  }

  onEndReached() {
    if (this.props.quertName) {
      this.props.dispatch(handleOptionChange('onEndReached', true, 'searchlist'))
    } else {
      this.props.dispatch(handleOptionChange('onEndReached', true, 'goodslist'))
    }
  }

  render() {
    const {items} = this.props
    //console.log(this.props)

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    let dataSource = ds.cloneWithRows(items)
    return (
      <View style= {styles.view}>
        <ListView 
          dataSource={dataSource}
          onEndReached={this.onEndReached}
          renderRow={(goods) => {
            return (
              <View style={styles.container}>
                <View >
                    <View style={styles.right_box}>
                      <Text style={{color:'#bdc3c7',fontSize:10,marginRight:10}}>
                          预定{goods.deposit}
                          <Text style={styles.price}>
                            ￥{goods.price}
                          </Text>
                      </Text>
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
                      <Text style={styles.condition}>
                        {goods.condition == 1 ? '「现货」' : ''}
                      </Text>
                      {goods.title}
                    </Text>
                  </View>
                </View>
              </View>
            )
          }}/>
          {(this.props.onEndReached || this.props.isFetching) && <ProgressBarAndroid  styleAttr="Inverse" color="red" indeterminate={true}/>}
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
    paddingTop: 10,
    paddingBottom: 15,
    borderRadius: 10,
    paddingLeft: 1,
    paddingRight: 1

  },
  title: {
    color: '#2c3e50',
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10
  },
  top: {
    height: 40
  },
  price: {
    fontSize: 16,
    color: '#e74c3c',
    marginRight: 8
  },
  condition:{
    color: '#e74c3c',
    fontSize: 16,
  },
  right_box:{
    backgroundColor: '#f4f4f4',
    borderLeftWidth: 8,
    borderLeftColor: '#f4f4f4',
    alignSelf: 'flex-end',
    borderRadius: 2
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 5
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
    flex: 1,
    marginTop: 10,
  }
})
export default Goods