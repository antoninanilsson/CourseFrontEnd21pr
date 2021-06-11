<template>
    <tr>
            
            <th scope="row">{{ingredient.foodCategory}}</th>
            <td>{{ingredient.text}}</td>
            <td>{{ingredient.weight.toFixed(2)}}</td>
            <td>
                <div class="d-flex align-item-center justify-content-end ">
                    <img :src="ingredient.image" class="img-thumbnail" alt="Ingredient" sizes="" >
                </div>
                
            </td>
    </tr>
</template>

<script>
export default {
    name:"IngredientCard",
    props:['ingredient']

}
</script>

<style scoped>
img {
    width:auto;
    max-height:150px;
    
}

</style>