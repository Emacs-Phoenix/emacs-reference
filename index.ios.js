
/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @flow
 */
'use strict';

const React = require('react');
const ReactNative = require('react-native');

const {
    AlertIOS,
    NavigatorIOS,
    ScrollView,
    StyleSheet,
    Component,
    Icon,
    Text,
    TouchableHighlight,
    View,
    AppRegistry,
    ListView
} = ReactNative;


import {Data} from './data.js';


const DataListPage = React.createClass({

    
    getInitialState: function() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(this.props.data)
        };
    },

    render: function() {
        return (
            <ScrollView style={styles.list}>
            <View style={styles.line}/>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this._renderRow}
              //renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
              renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
              />
            <View style={styles.line}/>
            </ScrollView>
        );
    },

    _renderRow: function(rowData, sectionID, rowID) {
        return (
            <View key={rowID}>
              <View style={styles.row}>
                <Text style={styles.rowTitle}>
                  {rowData.title}
                </Text>

                <Text style={styles.rowDesc}>
                  {rowData.text}
                </Text>
              </View>
              <View style={styles.separator} />
            </View>
        );
    }
});

const SelectListPage = React.createClass({
    render: function() {
        return (
            <ScrollView style={styles.list}>
            <View style={styles.line}/>
            <View style={styles.group}>
            {
                Object.keys(this.props.data).map((key) => {
                    return this._renderRow(key, () => {

                        switch(this.props.data[key].type) {
                        case 'select-list':
                            this.props.navigator.push({
                                title: key,
                                component: SelectListPage,
                                passProps: {
                                    data: this.props.data[key].data
                                }
                            });
                            break;
                        case 'data-list':
                            this.props.navigator.push({
                                title: key,
                                component: DataListPage,
                                passProps: {
                                    data: this.props.data[key].data
                                }
                            });
                        }                        
                    })
                })
            }
            </View>
            <View style={styles.line}/>
            </ScrollView>
        );
    },
    
    _renderRow: function(title, onPress) {
        return (
            <View key={title}>
              <TouchableHighlight onPress={onPress}>
                <View style={styles.row}>
                  <Text style={styles.rowText}>
                    {title}
                  </Text>
                </View>
              </TouchableHighlight>
              <View style={styles.separator} />
            </View>
        );
    }
});



const NavigatorIOSExample = React.createClass({
    
    render: function() {
        return (
            <NavigatorIOS
              style={styles.container}
              initialRoute={{
                  title: "Emacs",
                  component: SelectListPage,
                  passProps: {data: Data.data}
              }}
              itemWrapperStyle={styles.itemWrapper}
              tintColor="#008888"
              titleTextColor='#311B92'
            />
        );
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    selectTitle: {
        color: '#7C4DFF'
    },
    customWrapperStyle: {
        backgroundColor: '#bbdddd'
    },
    emptyPage: {
        flex: 1,
        paddingTop: 64
    },
    emptyPageText: {
        margin: 10
    },
    list: {
        backgroundColor: '#eeeeee',
        marginTop: 10
    },
    group: {
        backgroundColor: 'white',
    },
    groupSpace: {
        height: 15,
    },
    line: {
        backgroundColor: '#bbbbbb',
        height: StyleSheet.hairlineWidth,
    },
    row: {
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#bbbbbb',
        marginLeft: 15,
    },
    rowNote: {
        fontSize: 17,
    },
    rowText: {
        fontSize: 17,
        fontWeight: '500',
        color: '#302c50'
    },
    rowTitle: {
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 5,
        color: '#999999'
    },
    rowDesc: {
        fontSize: 18,
        color: '#333333'
    }
});

module.exports = NavigatorIOSExample;

AppRegistry.registerComponent('EmacsReference', () => NavigatorIOSExample);

