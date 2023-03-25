import React, {Component} from "react";
import { StyleSheet, View } from "react-native";
import MapView, {Marker} from "react-native-maps";

class App extends Component {
  render() {
    return  (
      <View style={{flex: 1}}>
        <MapView
        style={{flex: 1}}
        zoomControlEnabled={true}
        initialRegion={{
          latitude: 0.92804769639356,
          longitude: 104.44775090441074,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          
        }}
        //  mapType={"satellite"}
         mapType={"hybrid"}
        >
          {/* Kampus STT Indonesia */}
          <Marker
          coordinate={{latitude:0.9209331645369188, longitude: 104.45412553786923}}
          title={'STT Indonesia Tanjungpinang'}
          description={'Jl. Pompa Air, Tanjungpinang, Kepulauan Riau, Indonesia'}
          />
          {/* Kampus STIE */}
          <Marker
          coordinate={{latitude:0.9053190018474407, longitude:104.47651119949427}}
          title={'STIE tanjungpinang'}
          description={'Jl. R. H. Fisabillillah, No. 34, Sei Jang, Bukit Bestari, Sei Jang, Kec. Bukit Bestari, Kota Tanjung Pinang, Kepulauan Riau 29122'}
          />
          {/* Kampus STISIPOL */}
          <Marker
          coordinate={{latitude:0.8964884528354554, longitude:104.48075279545611}}
          title={'STISIPOL Tanjungpinang'}
          description={'Jl. Raja Haji Fisabilillah, Kelurahan No.48, Sei Jang, Kec. Bukit Bestari, Kota Tanjung Pinang, Kepulauan Riau 29124'}
          />
        </MapView>
      </View>
    );
  }
}

export default App;


