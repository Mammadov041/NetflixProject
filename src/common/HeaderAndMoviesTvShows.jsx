import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

const HeaderAndMoviesTvShows = ({title, list}) => {
  const navigation = useNavigation();

  const handleNavigateToDetail = (id, media_type) => {
    navigation.navigate('MovieDetails', {
      id: id,
      media_type: media_type,
    });
  };

  return (
    <View className="mb-6">
      <Text className="text-2xl mb-2 text-white font-montSerrat">{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {list.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              console.log('item + ' + JSON.stringify(item));
              handleNavigateToDetail(item.id, item.media_type);
            }}>
            <View className="mr-2 w-[115px] h-[165px] rounded-lg overflow-hidden">
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
                }}
                className="w-full h-full rounded-md"
                resizeMode="cover"
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HeaderAndMoviesTvShows;
