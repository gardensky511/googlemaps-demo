'use client'

import {
    Children,
    cloneElement,
    isValidElement,
    useEffect,
    useRef,
    useState,
} from 'react'
import styles from '@/app/components/Map/Map.module.css'

type MapProps = google.maps.MapOptions & {
    children: React.ReactNode
}

export const Map = ({ center, zoom, children }: MapProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const infoWindowRef = useRef<google.maps.InfoWindow | null>(
        new google.maps.InfoWindow({ maxWidth: 200 })
    )
    const [map, setMap] = useState<google.maps.Map>()

    useEffect(() => {
        if (ref.current && !map) {
            setMap(
                new window.google.maps.Map(ref.current, {
                    center,
                    zoom,
                })
            )
        }
    }, [ref, map])

    return (
        <>
            <div ref={ref} className={styles.map} />
            {Children.map(children, (child) => {
                if (isValidElement(child)) {
                    // set the map prop on the child component
                    // @ts-ignore
                    return cloneElement(child, { map, infoWindowRef })
                }
            })}
        </>
    )
}
