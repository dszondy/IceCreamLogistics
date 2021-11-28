using System;
using System.Collections.Generic;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Presentation.DTOs;
using IceCreamLogistics.Presentation.DTOs.IceCreamLogistics.Domain;

public class OrderDetailsDto
{
    public int Id { get; set; }
    public IEnumerable<OrderDetailsItemDto> Items { get; set; }
    public ClientDto Client { get; set; }
    public DateTime OrderCreated { get; set; }
    public DateTime RequestedDate { get; set; }
    public OrderState OrderState { get; set; }
    public IEnumerable<AssociatedBatchDto> AssociatedBatches { get; set; }
}

public class OrderDetailsItemDto
{
    public Recipe Recipe { get; set; }
    public decimal Amount { get; set; }
    public decimal SelectedMixingAmount { get; set; }
    public decimal MixedAmount { get; set; }
    public decimal CancelledAmount { get; set; }
    public decimal PendingAmount { get; set; }
}

public class AssociatedBatchDto
{
    public int MixingBatchId { get; set; }
    public bool BatchCompleted { get; set; }
    public string Name { get; set; }
    public DateTime Created { get; set; }
    public IEnumerable<MixingBatchItemDto> Items { get; set; }
}