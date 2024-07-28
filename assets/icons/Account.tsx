import COLORS from '@/constants/Colors'
import { UserRoundIcon } from 'lucide-react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

export default function Account({ focused }: { focused: boolean }) {
    return focused
        ? <Svg width="23" height="23" viewBox="0 0 23 23" fill="none">
        <Path d="M11.5 21C17.0228 21 21.5 16.5228 21.5 11C21.5 5.47715 17.0228 1 11.5 1C5.97715 1 1.5 5.47715 1.5 11C1.5 16.5228 5.97715 21 11.5 21Z" fill="black" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M11.5 13C13.7091 13 15.5 11.2091 15.5 9C15.5 6.79086 13.7091 5 11.5 5C9.29086 5 7.5 6.79086 7.5 9C7.5 11.2091 9.29086 13 11.5 13Z" fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        <Path d="M17.5 22C17.5 20.4087 16.8679 18.8826 15.7426 17.7574C14.6174 16.6321 13.0913 16 11.5 16C9.9087 16 8.38258 16.6321 7.25736 17.7574C6.13214 18.8826 5.5 20.4087 5.5 22" fill="white"/>
        <Path d="M17.5 22C17.5 20.4087 16.8679 18.8826 15.7426 17.7574C14.6174 16.6321 13.0913 16 11.5 16C9.9087 16 8.38258 16.6321 7.25736 17.7574C6.13214 18.8826 5.5 20.4087 5.5 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
        

        : <UserRoundIcon size={24} color={COLORS.black} />
}