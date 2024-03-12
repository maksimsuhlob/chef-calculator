import React from 'react'
import { Dimensions, ScrollView, View } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import { IIngredient } from '../../services/edamam/edamam-types'
import Input from '../atoms/input'
import Button from '../atoms/button'

interface IProps {
  data: IIngredient
  onChange: (ingredient:IIngredient)=>void
}
const IngredientForm = ({ data, onChange }:IProps) => {
  const { control, handleSubmit } = useForm<IIngredient>()
  const screenHeight = Dimensions.get('window').height

  console.warn(data)

  return (
    <View style={{ height: screenHeight - 300 }}>
      <ScrollView>
        <Controller
          control={control}
          name="label"
          rules={{
            required: true,
          }}
          render={({ field: { onChange: onChangeField, value } }) => {
            return (
              <Input
                labelText="Label"
                setValue={onChangeField}
                value={value}
              />
            )
          }}
        />
        <Controller
          control={control}
          name="knownAs"
          render={({ field: { onChange: onChangeField, value } }) => {
            return (
              <Input
                labelText="knownAs"
                setValue={onChangeField}
                value={value}
              />
            )
          }}
        />
        <Controller
          control={control}
          name="nutrients.ENERC_KCAL"
          rules={{
            required: true,
          }}
          render={({ field: { onChange: onChangeField, value } }) => {
            return (
              <Input
                keyboardType="number-pad"
                labelText="nutrients.ENERC_KCAL"
                setValue={onChangeField}
                value={value}
              />
            )
          }}
        />
        <Controller
          control={control}
          name="nutrients.PROCNT"
          render={({ field: { onChange: onChangeField, value } }) => {
            return (
              <Input
                keyboardType="number-pad"
                labelText="nutrients.PROCNT"
                setValue={onChangeField}
                value={value}
              />
            )
          }}
        />
        <Controller
          control={control}
          name="nutrients.FAT"
          render={({ field: { onChange: onChangeField, value } }) => {
            return (
              <Input
                keyboardType="number-pad"
                labelText="nutrients.FAT"
                setValue={onChangeField}
                value={value}
              />
            )
          }}
        />
        <Controller
          control={control}
          name="nutrients.CHOCDF"
          render={({ field: { onChange: onChangeField, value } }) => {
            return (
              <Input
                keyboardType="number-pad"
                labelText="nutrients.CHOCDF"
                setValue={onChangeField}
                value={value}
              />
            )
          }}
        />
        <Controller
          control={control}
          name="nutrients.FIBTG"
          render={({ field: { onChange: onChangeField, value } }) => {
            return (
              <Input
                keyboardType="number-pad"
                labelText="nutrients.FIBTG"
                setValue={onChangeField}
                value={value}
              />
            )
          }}
        />
        <Controller
          control={control}
          name="category"
          render={({ field: { onChange: onChangeField, value } }) => {
            return (
              <Input
                labelText="category"
                setValue={onChangeField}
                value={value}
              />
            )
          }}
        />
        <Controller
          control={control}
          name="categoryLabel"
          render={({ field: { onChange: onChangeField, value } }) => {
            return (
              <Input
                labelText="categoryLabel"
                setValue={onChangeField}
                value={value}
              />
            )
          }}
        />
        <Controller
          control={control}
          name="image"
          render={({ field: { onChange: onChangeField, value } }) => {
            return (
              <Input
                labelText="image"
                setValue={onChangeField}
                value={value}
              />
            )
          }}
        />
        <Button name="save" onPress={handleSubmit(onChange)} />
      </ScrollView>
    </View>
  )
}

export default IngredientForm
