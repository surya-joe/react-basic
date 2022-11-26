import React from 'react'
import { Column } from './Column'

export const Table = () => {
  return (
    <React.Fragment>
        <table>
            <tbody>
                <tr>
                    <Column />
                </tr>
            </tbody>
        </table>
    </React.Fragment>
  )
}
