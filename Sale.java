package TaskLast.controller;

public class Sale {
	private int Id;
	private String Name;
	private String Address;
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	@Override
	public String toString() {
		return "[Id=" + Id + " Name=" + Name + " Address=" + Address + "]"+"\n";
	}
	
	

}
