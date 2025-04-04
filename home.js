document.addEventListener("DOMContentLoaded", function () {
    console.log("Home Page Loaded");

    // Setup Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("tesseractCanvas"), antialias: true });

    renderer.setSize(window.innerWidth * 0.6, window.innerHeight * 0.6);
    document.body.appendChild(renderer.domElement);

    // Create a Wireframe Tesseract (4D Cube Projection)
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const edges = new THREE.EdgesGeometry(geometry);
    const material = new THREE.LineBasicMaterial({ color: 0xff6f61 });
    const cube = new THREE.LineSegments(edges, material);
    scene.add(cube);

    camera.position.z = 5;

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();

    // Handle Window Resize
    window.addEventListener("resize", () => {
        renderer.setSize(window.innerWidth * 0.6, window.innerHeight * 0.6);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });
});
function logout() {
    // Redirect to login page after logout
    window.location.href = "login.html";
}
