#Task 1

class SortingAlgo:
    """
    A class containing various sorting algorithms.

    Methods
    -------
    bubble_sort(arr)
        Sorts the input list using the Bubble Sort algorithm.

    merge_sort(arr)
        Sorts the input list using the Merge Sort algorithm.

    insertion_sort()
        Sorts the list provided during class initialization using the Insertion Sort algorithm.

    quick_sort()
        Sorts the list provided during class initialization using the Quick Sort algorithm.
    """

    def __init__(self, input_list):
        """
        Initializes the SortingAlgo object with a list for sorting.

        Parameters
        ----------
        input_list : list
            The list to be sorted.
        """
        self.list_passed = input_list

    @staticmethod
    def bubble_sort(arr):
        """
        Sorts the input list using the Bubble Sort algorithm.

        Parameters
        ----------
        arr : list
            
        """
        n = len(arr)
        for i in range(n):
            for j in range(0, n-i-1):
                if arr[j] > arr[j+1]:
                    arr[j], arr[j+1] = arr[j+1], arr[j]

    @staticmethod
    def merge_sort(arr):
        """
        Sorts the input list using the Merge Sort algorithm.

        Parameters
        ----------
        arr : list
            The list to be sorted in-place.
        """
        if len(arr) > 1:
            mid = len(arr) // 2
            left = arr[:mid]
            right = arr[mid:]

            SortingAlgo.merge_sort(left)
            SortingAlgo.merge_sort(right)

            i = j = k = 0
            while i < len(left) and j < len(right):
                if left[i] < right[j]:
                    arr[k] = left[i]
                    i += 1
                else:
                    arr[k] = right[j]
                    j += 1
                k += 1

            while i < len(left):
                arr[k] = left[i]
                i += 1
                k += 1

            while j < len(right):
                arr[k] = right[j]
                j += 1
                k += 1

    def insertion_sort(self):
        """
        Sorts the list provided during class initialization using the Insertion Sort algorithm.
        """
        li = self.list_passed
        print("initial", li)
        for i in range(1, len(li)):
            j = i - 1
            key = li[i]
            while j >= 0 and key < li[j]:
                li[j + 1] = li[j]
                print("inside", li)
                j -= 1
            li[j + 1] = key
            print("last", li, "\n")
        print(li)

    def quick_sort(self):
        """
        Sorts the list provided during class initialization using the Quick Sort algorithm.
        """
        if not self.list_passed:
            print("Empty list provided.")
            return

        li = self.list_passed

        def partition(arr, low, high):
            i = low - 1
            pivot = arr[high]

            for j in range(low, high):
                if arr[j] <= pivot:
                    i += 1
                    arr[i], arr[j] = arr[j], arr[i]

            arr[i + 1], arr[high] = arr[high], arr[i + 1]
            return i + 1

        def quick_sort_recursive(arr, low, high):
            if low < high:
                pi = partition(arr, low, high)

                quick_sort_recursive(arr, low, pi - 1)
                quick_sort_recursive(arr, pi + 1, high)

        quick_sort_recursive(li, 0, len(li) - 1)
        print(li)



bubble_sort_list = [7, 8, 4, 2, 3, 8, 6]
print(bubble_sort_list)
SortingAlgo.bubble_sort(bubble_sort_list)
print(bubble_sort_list)

merge_sort_list = [7, 8, 4, 2, 3, 8, 6]
print(merge_sort_list)
SortingAlgo.merge_sort(merge_sort_list)
print(merge_sort_list)

###############################################################################################################
# Bank App using oops concept
class BankAccount:
    """
    A class representing a simple bank account.

    Attributes
    ----------
    account_holder : str
        The name of the account holder.
    balance : float
        The current balance of the account.

    Methods
    -------
    __init__(account_holder, balance=0)
        Initializes a new BankAccount object.

    deposit(amount)
        Deposits the specified amount into the account.

    withdraw(amount)
        Withdraws the specified amount from the account, if sufficient balance is available.

    get_balance()
        Returns the current balance of the account.

    info()
        Displays account information, including the account holder's name and balance.
    """

    def __init__(self, account_holder, balance=0):
        """
        Initializes a new BankAccount object.

        Parameters
        ----------
        account_holder : str
            The name of the account holder.
        balance : float, optional
            The initial balance of the account (default is 0).
        """
        self.account_holder = account_holder
        self.balance = balance

    def deposit(self, amount):
        """
        Deposits the specified amount into the account.

        Parameters
        ----------
        amount : float
            The amount to be deposited.

        Raises
        ------
        ValueError
            If the specified amount is not greater than 0.
        """
        if amount > 0:
            self.balance += amount
            print(f"Deposited {amount}. Amount after depositing: {self.balance}")
        else:
            print("Invalid deposit amount.")

    def withdraw(self, amount):
        """
        Withdraws the specified amount from the account, if sufficient balance is available.

        Parameters
        ----------
        amount : float
            The amount to be withdrawn.

        Raises
        ------
        ValueError
            If the specified amount is greater than the current balance.
        """
        if amount <= self.balance:
            self.balance -= amount
            print(f"Withdrawn: {amount}. After withdrawal, new balance: {self.balance}")
        else:
            print("Insufficient balance for withdrawal.")

    def get_balance(self):
        """
        Returns the current balance of the account.

        Returns
        -------
        float
            The current balance.
        """
        return self.balance

    def info(self):
        """
        Displays account information, including the account holder's name and balance.
        """
        print(f"Account Holder Name: {self.account_holder}")
        print(f"Balance: {self.balance}")


if __name__ == "__main__":
    # two bank accounts
    account1 = BankAccount("Varsha", 1000)
    account2 = BankAccount("Sneha")

    # Deposit and withdraw from the accounts
    deposit_amount = float(input("Enter deposit amount for Account 1: "))
    account1.deposit(deposit_amount)
    deposit_amount_2 = float(input("Enter deposit amount for Account 2: "))
    account2.deposit(deposit_amount_2)
    account1.withdraw(200)
    account2.withdraw(1500)

    # Display account information
    print("\nAccount Information:")
    account1.info()
    account2.info()

# Task 3. Combining Sort  Methods

def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

def insertion_sort(arr, left=0, right=None):
    if right is None:
        right = len(arr) - 1

    for i in range(left + 1, right + 1):
        j = i
        while j > left and arr[j] < arr[j - 1]:
            arr[j], arr[j - 1] = arr[j - 1], arr[j]
            j -= 1

def combined_sort(arr):
    # Using Bubble Sort for the initial pass
    bubble_sort(arr)

    # Using Insertion Sort for further refinement
    insertion_sort(arr)


my_list = [64, 34, 25, 12, 22, 11, 90]
combined_sort(my_list)
print(" Combined Sort:", my_list)





