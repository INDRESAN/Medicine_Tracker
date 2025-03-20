// Sales vs Stock Chart
const ctx = document.getElementById('salesChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [
            { label: 'Stock', data: [400, 300, 500], borderColor: '#007BFF' },
            { label: 'Sales', data: [240, 139, 280], borderColor: '#FF9800' }
        ]
    }
});

// Search Orders Function
document.getElementById('searchInput').addEventListener('keyup', function() {
    let filter = this.value.toLowerCase();
    let rows = document.querySelectorAll('#orderTable tr');
    rows.forEach(row => {
        row.style.display = row.textContent.toLowerCase().includes(filter) ? '' : 'none';
    });
});
// Redirect to Medicine List when clicking Total Medicines
function openTotalMedicines() {
    window.location.href = "medicine-list.html";
}

// Toggle Low Stock Medicines Display
function toggleLowStock() {
    let section = document.getElementById("lowStockSection");
    section.style.display = section.style.display === "none" ? "block" : "none";
}

// Toggle Expired Medicines Display
function toggleExpiredStock() {
    let section = document.getElementById("expiredStockSection");
    section.style.display = section.style.display === "none" ? "block" : "none";
}
// Real-time Stock Monitoring
function checkStockLevels() {
    let medicines = [
        { name: "Paracetamol", stock: 2, reorderLevel: 5, supplier: "Supplier A" },
        { name: "Ibuprofen", stock: 8, reorderLevel: 10, supplier: "Supplier B" }
    ];

    medicines.forEach(med => {
        if (med.stock <= med.reorderLevel) {
            showNotification(`⚠️ Low Stock Alert: ${med.name} is below threshold!`, "warning");
            suggestRestock(med.name, med.supplier);
        }
    });
}

// Function to suggest a restock
function suggestRestock(medicine, supplier) {
    let message = `📢 Consider reordering ${medicine} from ${supplier}.`;
    showNotification(message, "info");
}

// Function to show alerts in real-time
function showNotification(message, type) {
    let alertBox = document.createElement("div");
    alertBox.className = `alert alert-${type}`;
    alertBox.innerHTML = message;

    document.getElementById("notifications").appendChild(alertBox);

    // Remove after 5 seconds
    setTimeout(() => alertBox.remove(), 5000);
}

// Run stock check every 10 seconds
setInterval(checkStockLevels, 10000);
// AI-Powered Stock Predictions
function predictStockOut() {
    let salesData = [
        { name: "Paracetamol", dailySales: 3, currentStock: 10 },
        { name: "Ibuprofen", dailySales: 2, currentStock: 8 }
    ];

    salesData.forEach(med => {
        let daysLeft = Math.floor(med.currentStock / med.dailySales);
        if (daysLeft <= 3) {
            showNotification(`🔮 Prediction: ${med.name} will run out in ${daysLeft} days!`, "danger");
        }
    });
}

// Run predictions every 10 seconds
setInterval(predictStockOut, 10000);
