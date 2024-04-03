import { View, Text, Image, ImageBackground, TouchableOpacity,  } from "react-native";

import { Feather } from "@expo/vector-icons"

import { colors } from "@/styles/colors";
import { QRCode } from "@/components/qrcode";

type Props = {
    image?: string
    onChangeAvatar?: () => void
    onShowQRCode?: () => void
}

export function Credential({ onChangeAvatar,onShowQRCode, image }: Props){
    return (
        <View className="w-full self-stretch items-center">
            <Image 
            source={require("@/assets/ticket/band.png")} 
            className="w-24 h-52 z-10"
            />

            <View className="bg-black/20 self-stretch items-center pb-6 border-white/10 mx-3 rounded-2xl -mt-5">
                
                <ImageBackground 
                source={require("@/assets/ticket/header.png")}
                className="px-6 py-8 h-40 items-center self-stretch border-b border-white/10 overflow-hidden"
                >

                    <View className="w-full flex-row items-center justify-between">
                        <Text className="text-zinc-50 text-sm font-bold">Unite summit</Text>
                        <Text className="text-zinc-50 text-sm font-bold">#123</Text>
                    </View>

                    <View className="w-40 h-40 bg-black rounded-full" />
                    
                </ImageBackground>

                {image ? (
                    <TouchableOpacity
                    onPressOut={onChangeAvatar}
                    >
                        <Image 
                        source={{uri: image}} 
                        className="w-36 h-36 rounded-full -mt-24"
                        />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity 
                    activeOpacity={0.7} 
                    onPressOut={onChangeAvatar}
                    >
                        <Feather name="camera" color={colors.green[400]} size={32} className="-mt-16  items-center justify-center"  />
                     </TouchableOpacity>
                )}

                <Text className="font-bold text-2xl text-zinc-50 mt-4">
                    Eduardo Kleber
                </Text>

                <Text className="font-regular text-base text-zinc-300 mb-4">
                    edukleber100@gmail.com
                </Text>

                <QRCode value="Eduardo Kleber" size={120}></QRCode>

                <TouchableOpacity 
                activeOpacity={0.7}
                onPress={onShowQRCode}
                >
                    <Text className="font-body text-orange-500 text-sm mt-6">
                        Ampliar QRCode
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}