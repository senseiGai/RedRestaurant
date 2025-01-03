import { View, TextInput } from 'react-native'
import React from 'react'
import SearchIcon from '../../shared/icons/search-icon'
import { MyTouchableOpacity } from '../../shared/ui/my-touchable-opacity/my-touchable-opacity'
import SettingsIcon from '../../shared/icons/settings-icon'

interface SearchHeaderProps {
    searchValue: string;
    onSearchChange: (text: string) => void;
}

const SearchHeader = ({ searchValue, onSearchChange }: SearchHeaderProps) => {
    return (
        <View className="w-full flex flex-row items-center h-[41px] justify-between overflow-hidden">
            <View className="bg-[#FFD4D447] flex-row justify-between items-center px-[12px] rounded-[33px] h-full w-[100%]">
                <TextInput
                    value={searchValue}
                    onChangeText={onSearchChange}
                    placeholder="SEARCH"
                    placeholderTextColor="#4E0404"
                    className="w-[80%] font-[600] text-[15px] flex items-center justify-center"
                    style={{ fontFamily: 'Montserrat' }}
                />
                <SearchIcon />
            </View>
        </View>
    )
}

export default SearchHeader