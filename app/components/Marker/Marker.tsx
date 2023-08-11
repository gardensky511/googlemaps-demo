'use client'

import { MutableRefObject, useEffect, useState } from 'react'
import styles from './Marker.module.css'

type MarkerProps = google.maps.MarkerOptions & {
    station: { name: string; description: string }
    infoWindowRef?: MutableRefObject<google.maps.InfoWindow | null>
}

export const Marker = ({ station, infoWindowRef, ...options }: MarkerProps) => {
    const [marker, setMarker] = useState<google.maps.Marker>()

    const infoWindowContent = `<div class="${styles.infoWindow}"><span class="${styles.name}">${station.name}</span><span class="${styles.description}">${station.description}</span></div>`

    marker?.addListener('click', () => {
        // マップのセンターをクリックしたマーカーにスムーズに移動させる
        if (options.map instanceof google.maps.Map) {
            // see https://developers.google.com/maps/documentation/javascript/reference/map#Map.panTo
            options.map.panTo(marker.getPosition() as google.maps.LatLng)
        }

        // クリックしたマーカーに在庫情報の infoWindow を表示させる
        if (infoWindowRef && infoWindowRef.current) {
            infoWindowRef.current.setContent(infoWindowContent)
            infoWindowRef.current.open(options.map, marker)
        }
    })

    useEffect(() => {
        if (!marker) {
            setMarker(
                new google.maps.Marker({
                    position: options.position,
                })
            )
        }

        // remove marker from map on unmount
        return () => {
            if (marker) {
                marker.setMap(null)
            }
        }
    }, [marker])

    useEffect(() => {
        if (marker) {
            marker.setOptions(options)
        }
    }, [marker, options])

    return null
}
