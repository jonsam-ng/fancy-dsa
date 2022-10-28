---
title: Haversine [半正矢公式]
date: 2022-09-26 10:05:25
permalink: /pages/c3f9cf/
categories:
  - 算法
  - Math 数学
tags:
  - 
---

## 实现

```js
/**
 * @function HaversineDistance
 * @description Calculate the distance between two coordinates using the haversine formula
 * @param {Integer} latitude1 - The input integer
 * @param {Integer} latitude2 - The input integer
 * @param {Integer} longitude1 - The input integer
 * @param {Integer} longitude2 - The input integer
 * @return {Integer} Haversine Distance.
 * @see [Haversine_Distance](https://pt.wikipedia.org/wiki/F%C3%B3rmula_de_Haversine)
 */
const haversineDistance = (latitude1 = 0, longitude1 = 0, latitude2 = 0, longitude2 = 0) => {
  validateLatOrLong(latitude1)
  validateLatOrLong(latitude2)
  validateLatOrLong(longitude1)
  validateLatOrLong(longitude2)
  const earthRadius = 6371e3 // 6,371km
  const pi = Math.PI
  const cos1 = latitude1 * pi / 180.0
  const cos2 = latitude2 * pi / 180.0
  const deltaLatitude = (latitude2 - latitude1) * pi / 180.0
  const deltaLongitude = (longitude2 - longitude1) * pi / 180.0

  const alpha = Math.sin(deltaLatitude / 2) * Math.sin(deltaLatitude / 2) + Math.cos(cos1) * Math.cos(cos2) * Math.sin(deltaLongitude / 2) * Math.sin(deltaLongitude / 2)
  const constant = 2 * Math.atan2(Math.sqrt(alpha), Math.sqrt(1 - alpha))
  return earthRadius * constant
}

const validateLatOrLong = value => {
  if (typeof value !== 'number') {
    throw new TypeError('The value of latitude or longitude should be a number')
  }
}
```

## 参考

- [半正矢公式 - Wikiwand](https://www.wikiwand.com/zh-hans/%E5%8D%8A%E6%AD%A3%E7%9F%A2%E5%85%AC%E5%BC%8F)
