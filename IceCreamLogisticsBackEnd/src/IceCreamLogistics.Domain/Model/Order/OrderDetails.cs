using System;
using System.Collections.Generic;
using IceCreamLogistics.Domain;

public class OrderDetails
{
    public int Id { get; set; }
    public IEnumerable<OrderItem> Items { get; set; }
    public Client Client { get; set; }
    public DateTime OrderCreated { get; set; }
    public DateTime RequestedDate { get; set; }
    public OrderState OrderState { get; set; }
    public IEnumerable<AssociatedBatch> AssociatedBatches { get; set; }
}

public class OrderDetailsItem
{
    public Recipe Recipe { get; set; }
    public decimal Amount { get; set; }
    public decimal SelectedMixingAmount { get; set; }
    public decimal MixedAmount { get; set; }
}

public class AssociatedBatch
{
    public int MixingBatchId { get; set; }
    public bool BatchCompleted { get; set; }
    public string Name { get; set; }
    public DateTime Created { get; set; }

    public IEnumerable<MixingBatchItem> Items { get; set; }
}