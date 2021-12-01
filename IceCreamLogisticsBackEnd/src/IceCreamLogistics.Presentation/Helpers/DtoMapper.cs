using IceCreamLogistics.Domain;
using IceCreamLogistics.Presentation.DTOs;
using Mapster;

namespace IceCreamLogistics.Presentation
{
    [Mapper]
    public interface DtoMapper
    {
       RecipeDto MapToRecipeDto(Recipe recipe);    
       RecipeCreate MapToRecipeCreate(RecipeCreateDto recipeCreateDto);
       OrderSearchParams MapToOrderSearchParams(OrderSearchParamsDto orderSearchParamsDto);
       OrderDto MapToOrderDto(Order order);
       OrderDetailsDto MapToOrderDetailsDto(OrderDetails order);
       OrderForDeliveryDto MapToOrderForDeliveryDto(Order order); 
    }
}