using System.Linq;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Presentation;
using IceCreamLogistics.Presentation.DTOs;
using IceCreamLogistics.Presentation.DTOs.IceCreamLogistics.Domain;

namespace IceCreamLogistics.Presentation
{
    public partial class DtoMapperImpl : DtoMapper
    {
        public RecipeDto MapToRecipeDto(Recipe p1)
        {
            return p1 == null ? null : new RecipeDto()
            {
                Id = p1.Id,
                Name = p1.Name,
                CanBeOrdered = p1.CanBeOrdered,
                PricePerUnit = p1.PricePerUnit,
                DescriptionForLabels = p1.DescriptionForLabels
            };
        }
        public RecipeCreate MapToRecipeCreate(RecipeCreateDto p2)
        {
            return p2 == null ? null : new RecipeCreate()
            {
                Id = p2.Id,
                Name = p2.Name,
                CanBeOrdered = p2.CanBeOrdered,
                DescriptionForLabels = p2.DescriptionForLabels,
                PricePerUnit = p2.PricePerUnit,
                Ingredients = p2.Ingredients == null ? null : p2.Ingredients.Select<RecipeCreateIngredientDto, RecipeCreateIngredient>(funcMain1)
            };
        }
        public OrderSearchParams MapToOrderSearchParams(OrderSearchParamsDto p4)
        {
            return p4 == null ? null : new OrderSearchParams()
            {
                From = p4.From,
                To = p4.To,
                ClientName = p4.ClientName,
                RecipeName = p4.RecipeName
            };
        }
        public OrderDto MapToOrderDto(Order p5)
        {
            return p5 == null ? null : new OrderDto()
            {
                Id = p5.Id,
                Items = p5.Items == null ? null : p5.Items.Select<OrderItem, OrderItem>(funcMain2),
                Client = p5.Client == null ? null : new Client()
                {
                    Id = p5.Client.Id,
                    Name = p5.Client.Name,
                    Address = p5.Client.Address == null ? null : new Address()
                    {
                        Country = p5.Client.Address.Country,
                        Zip = p5.Client.Address.Zip,
                        Region = p5.Client.Address.Region,
                        City = p5.Client.Address.City,
                        AddressLine = p5.Client.Address.AddressLine
                    },
                    Email = p5.Client.Email,
                    Phone = p5.Client.Phone
                },
                OrderCreated = p5.OrderCreated,
                RequestedDate = p5.RequestedDate,
                OrderState = p5.OrderState
            };
        }
        public OrderDetailsDto MapToOrderDetailsDto(OrderDetails p7)
        {
            return p7 == null ? null : new OrderDetailsDto()
            {
                Id = p7.Id,
                Items = p7.Items == null ? null : p7.Items.Select<OrderDetailsItem, OrderDetailsItemDto>(funcMain3),
                Client = p7.Client == null ? null : new ClientDto()
                {
                    Id = p7.Client.Id,
                    Name = p7.Client.Name,
                    Address = p7.Client.Address == null ? null : new Address()
                    {
                        Country = p7.Client.Address.Country,
                        Zip = p7.Client.Address.Zip,
                        Region = p7.Client.Address.Region,
                        City = p7.Client.Address.City,
                        AddressLine = p7.Client.Address.AddressLine
                    },
                    Email = p7.Client.Email,
                    Phone = p7.Client.Phone
                },
                OrderCreated = p7.OrderCreated,
                RequestedDate = p7.RequestedDate,
                OrderState = p7.OrderState,
                AssociatedBatches = p7.AssociatedBatches == null ? null : p7.AssociatedBatches.Select<AssociatedBatch, AssociatedBatchDto>(funcMain4)
            };
        }
        public OrderForDeliveryDto MapToOrderForDeliveryDto(Order p11)
        {
            return p11 == null ? null : new OrderForDeliveryDto()
            {
                Id = p11.Id,
                Items = p11.Items == null ? null : p11.Items.Select<OrderItem, OrderItemForDeliveryDto>(funcMain6),
                Client = p11.Client == null ? null : new Client()
                {
                    Id = p11.Client.Id,
                    Name = p11.Client.Name,
                    Address = p11.Client.Address == null ? null : new Address()
                    {
                        Country = p11.Client.Address.Country,
                        Zip = p11.Client.Address.Zip,
                        Region = p11.Client.Address.Region,
                        City = p11.Client.Address.City,
                        AddressLine = p11.Client.Address.AddressLine
                    },
                    Email = p11.Client.Email,
                    Phone = p11.Client.Phone
                },
                RequestedDate = p11.RequestedDate,
                OrderState = p11.OrderState
            };
        }
        
        private RecipeCreateIngredient funcMain1(RecipeCreateIngredientDto p3)
        {
            return p3 == null ? null : new RecipeCreateIngredient()
            {
                IngredientId = p3.IngredientId,
                Amount = p3.Amount
            };
        }
        
        private OrderItem funcMain2(OrderItem p6)
        {
            return p6 == null ? null : new OrderItem()
            {
                Recipe = p6.Recipe == null ? null : new Recipe()
                {
                    Id = p6.Recipe.Id,
                    Name = p6.Recipe.Name,
                    DescriptionForLabels = p6.Recipe.DescriptionForLabels,
                    CanBeOrdered = p6.Recipe.CanBeOrdered,
                    PricePerUnit = p6.Recipe.PricePerUnit
                },
                Amount = p6.Amount
            };
        }
        
        private OrderDetailsItemDto funcMain3(OrderDetailsItem p8)
        {
            return p8 == null ? null : new OrderDetailsItemDto()
            {
                Recipe = p8.Recipe == null ? null : new Recipe()
                {
                    Id = p8.Recipe.Id,
                    Name = p8.Recipe.Name,
                    DescriptionForLabels = p8.Recipe.DescriptionForLabels,
                    CanBeOrdered = p8.Recipe.CanBeOrdered,
                    PricePerUnit = p8.Recipe.PricePerUnit
                },
                Amount = p8.Amount,
                SelectedMixingAmount = p8.SelectedMixingAmount,
                MixedAmount = p8.MixedAmount,
                CancelledAmount = p8.CancelledAmount,
                PendingAmount = p8.PendingAmount
            };
        }
        
        private AssociatedBatchDto funcMain4(AssociatedBatch p9)
        {
            return p9 == null ? null : new AssociatedBatchDto()
            {
                MixingBatchId = p9.MixingBatchId,
                BatchCompleted = p9.BatchCompleted,
                Name = p9.Name,
                Created = p9.Created,
                Items = p9.Items == null ? null : p9.Items.Select<MixingBatchItem, MixingBatchItemDto>(funcMain5)
            };
        }
        
        private OrderItemForDeliveryDto funcMain6(OrderItem p12)
        {
            return p12 == null ? null : new OrderItemForDeliveryDto()
            {
                Recipe = p12.Recipe == null ? null : new Recipe()
                {
                    Id = p12.Recipe.Id,
                    Name = p12.Recipe.Name,
                    DescriptionForLabels = p12.Recipe.DescriptionForLabels,
                    CanBeOrdered = p12.Recipe.CanBeOrdered,
                    PricePerUnit = p12.Recipe.PricePerUnit
                },
                Amount = p12.Amount
            };
        }
        
        private MixingBatchItemDto funcMain5(MixingBatchItem p10)
        {
            return p10 == null ? null : new MixingBatchItemDto()
            {
                Recipe = p10.Recipe == null ? null : new RecipeDto()
                {
                    Id = p10.Recipe.Id,
                    Name = p10.Recipe.Name,
                    CanBeOrdered = p10.Recipe.CanBeOrdered,
                    PricePerUnit = p10.Recipe.PricePerUnit,
                    DescriptionForLabels = p10.Recipe.DescriptionForLabels
                },
                Amount = p10.Amount,
                CompletedAmount = p10.CompletedAmount
            };
        }
    }
}