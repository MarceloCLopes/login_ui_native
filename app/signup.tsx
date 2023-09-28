import { Image, Text, SafeAreaView, View, TextInput, TouchableOpacity, Pressable } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
import { Link } from "expo-router";

const SignUp = () => {

  return (
    <SafeAreaView className="bg-white h-full w-full">
      <StatusBar style="light" />
      <Image className="h-full w-full absolute" source={require('../assets/images/background.png')} />

      <View className="flex-row justify-around w-full absolute">
        <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()} className="h-[225px] w-[90px]" source={require('../assets/images/light.png')} />
        <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify()} className="h-[160px] w-[65px]" source={require('../assets/images/light.png')} />
      </View>

      <View className="h-full w-full flex justify-around pt-52">
        <View className="flex items-center">
          <Animated.Text entering={FadeInUp.duration(1000).springify()} className="text-5xl font-bold tracking-wide text-white mt-4">Sign Up</Animated.Text>
        </View>

        <View className="flex items-center mx-4 space-y-4">
          <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full mt-12">
            <TextInput placeholder="Username" placeholderTextColor={'gray'} autoCapitalize="none" />
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full">
            <TextInput placeholder="Email" placeholderTextColor={'gray'} autoCapitalize="none" />
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full">
            <TextInput placeholder="Password" placeholderTextColor={'gray'} secureTextEntry autoCapitalize="none" />
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="w-full">
            <TouchableOpacity activeOpacity={0.7} className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
              <Text className="text-center text-white text-xl font-bold">SignUp</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(800).duration(1000).springify()} className="flex-row justify-center space-x-1">
            <Text >Already have an account?</Text>
            <Link href="/" asChild >
              <Pressable>
                <Text className="text-sky-600">Login</Text>
              </Pressable>
            </Link>
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignUp