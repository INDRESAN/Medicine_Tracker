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
