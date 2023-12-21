import pandas as pd
df1 = pd.read_csv('sheet_10.csv')
df2 = pd.read_csv('sheet_12.csv')

def concat_students(df1, df2):
    
    return pd.concat([df1, df2])

def Examination(df, passing_mark, distinction_criteria, class_name):
    # Number of students Passed in all subjects 10
    passing_mark = 35
    df1['Passed_All'] = df1[['maths','science','english','kannada']].fillna(0).min(axis=1) >= passing_mark
    num_students_passed_all = df1['Passed_All'].sum()
    print(f"Number of students who passed in all subjects (Class {class_name}):", num_students_passed_all)
    # Number of students Passed in all subjects 10
    # df2['Passed_All'] = df2[['physics','chemistry','maths','biology']].fillna(0).min(axis=1) >= passing_mark
    # num_students_passed_all = df2['Passed_All'].sum()
    # print(f"Number of students who passed in all subjects (Class {class_name}):", num_students_passed_all)

    # Number of students who secured distinctions
    df1['Total Percentage'] = df1[['maths', 'science', 'english', 'kannada']].mean(axis=1)
    distinction_criteria = 85
    df1['Distinction'] = df1['Total Percentage'] > distinction_criteria
    num_students_distinction = df1['Distinction'].sum()
    print(f"Number of students who achieved distinction in class  Examination{class_name}:", num_students_distinction)
    
    
    # Number of students who secured distinctions
    # df2['Total Percentage'] = df2[['physics','chemistry','maths','biology']].mean(axis=1)
    # distinction_criteria = 85
    # df2['Distinction'] = df2['Total Percentage'] > distinction_criteria
    # num_students_distinction = df2['Distinction'].sum()
    # print(f"Number of students who achieved distinction in class 12 Examination {class_name}:", num_students_distinction)

    # Total Marks
    df1['Total Score'] = df1['maths'] + df1['english'] + df1['kannada'] + df1['science'] 
    df1['Total Marks'] = df1[['maths', 'english', 'kannada','science']].sum(axis=1)


    # Total Marks
    # df2['Total Score'] = df2['physics'] + df2['chemistry'] + df2['maths'] + df2['biology'] 
    # df2['Total Marks'] = df2[['physics', 'chemistry', 'maths','biology']].sum(axis=1)
    df.to_csv(f'updated_students_data_{class_name.lower()}.csv', index=False)
    print(f"Updated Student Data (Class {class_name}):")
    print(df)

def exam(df1, df2):
    x = int(input("1. 10 Examination Result Details\n2. 12 Examination Results Details\n Enter your option here: "))
    if x == 1:
        Examination(df1, 35, 85, "10")
    elif x == 2:
        Examination(df2, 35, 85, "12")
    else:
        print("No reulsts found")

def main():
   
    # Concatenate dataframes
    total_students = concat_students(df1, df2)
    print(total_students.count())

    # Number of students appeared
    print(pd.concat([df1['register_no'], df2['register_no']]).count())

    # Count of null values in each sheet
    print(df1.isnull().any(axis=1).sum())
    print(df2.isnull().any(axis=1).sum())

    exam(df1, df2)

if __name__ == "__main__":
    main()
