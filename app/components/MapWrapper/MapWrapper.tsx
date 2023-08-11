'use client'

import { Wrapper } from '@googlemaps/react-wrapper'
import { Map } from '@/app/components/Map'
import { Marker } from '@/app/components/Marker'

export default function MapWrapper() {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

    if (!apiKey) return null

    return (
        <Wrapper apiKey={apiKey}>
            <Map center={CENTER} zoom={ZOOM}>
                {positions.map(({ name, description, ...position }) => (
                    <Marker
                        key={name}
                        position={position}
                        station={{ name, description }}
                    />
                ))}
            </Map>
        </Wrapper>
    )
}

const CENTER = {
    lat: 35.68141044129315,
    lng: 139.767092618762,
}
const ZOOM = 10
const positions = [
    {
        name: '東京駅',
        description:
            '東京都千代田区丸の内一丁目にある、東日本旅客鉄道（JR東日本）・東海旅客鉄道（JR東海）・東京地下鉄（東京メトロ）の駅。JR東日本の在来線と新幹線各路線、JR東海の東海道新幹線、東京メトロの丸ノ内線が発着するターミナル駅である。',
        lat: 35.68141044129315,
        lng: 139.767092618762,
    },
    {
        name: '横浜駅',
        description:
            '神奈川県横浜市西区にある、東日本旅客鉄道（JR東日本）・東急電鉄・横浜高速鉄道・京浜急行電鉄（京急）・相模鉄道（相鉄）・横浜市交通局（横浜市営地下鉄）の駅。',
        lat: 35.46614692936646,
        lng: 139.62210492486503,
    },
    {
        name: '渋谷駅',
        description:
            '東京都渋谷区にある、東日本旅客鉄道（JR東日本）・京王電鉄・東急電鉄・東京地下鉄（東京メトロ）の駅である。',
        lat: 35.65827779222054,
        lng: 139.70156071057758,
    },
    {
        name: '新宿駅',
        description:
            '東京都新宿区・渋谷区に所在する[1]、東日本旅客鉄道（JR東日本）・京王電鉄・小田急電鉄・東京地下鉄（東京メトロ）・東京都交通局（都営地下鉄）の駅である。',
        lat: 35.68978963619087,
        lng: 139.70057130574577,
    },
    {
        name: '吉祥寺駅',
        description:
            '東京都武蔵野市吉祥寺南町一丁目および同二丁目にある、東日本旅客鉄道（JR東日本）・京王電鉄の駅である。',
        lat: 35.70753008249373,
        lng: 139.57912107437915,
    },
]
