import { View, Text, TextInput } from 'react-native'
import React from 'react'
import SearchIcon from '../../shared/icons/search-icon'
import { MyTouchableOpacity } from '../../shared/ui/my-touchable-opacity/my-touchable-opacity'
import SettingsIcon from '../../shared/icons/settings-icon'

const SearchHeader = () => {
    return (
        <View className="w-full flex flex-row items-center h-[41px] justify-between overflow-hidden">
            {/* Search Input Container */}
            <View className="bg-[#FFD4D447] flex-row justify-between items-center px-[12px] rounded-[33px] h-full w-[85%]">
                <TextInput
                    placeholder="SEARCH"
                    placeholderTextColor="#4E0404"
                    className="w-[80%] font-[600] text-[15px] flex items-center justify-center"
                    style={{ fontFamily: 'Montserrat' }}
                />
                <SearchIcon />
            </View>
            <MyTouchableOpacity className="bg-[#FFD4D447] rounded-[33px] w-[50px] h-full flex items-center justify-center">
                <SettingsIcon />
            </MyTouchableOpacity>
        </View>
    )
}

export default SearchHeader