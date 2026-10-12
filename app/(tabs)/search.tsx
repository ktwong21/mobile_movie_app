import MovieCard from '@/components/MovieCard';
import { images } from '@/constants/images';
import { fetchMovies } from '@/services/api';
import useFetch from '@/services/useFetch';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, View } from 'react-native';

const Search = () => {
  const router = useRouter();

  const { data: movies, 
    loading: moviesLoading, 
    error: moviesError } = useFetch(() => fetchMovies({ 
    query: '' 
  }));
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="flex-1 absolute w-full z-0" resizeMode="cover" />
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
      />
    </View>

  );
};

export default Search;
