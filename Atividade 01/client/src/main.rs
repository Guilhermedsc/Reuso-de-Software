use restaurant::front_of_house::hosting;
use restaurant::back_of_house;
use restaurant::PI;

fn main() {
    // Usando funções do módulo hosting
    hosting::add_to_wait_list();
    hosting::seat_at_table();

    // Usando função do módulo back_of_house
    back_of_house::take_care_trash();

    // Usando constante PI
    println!("The value of PI is: {}", PI);
}
